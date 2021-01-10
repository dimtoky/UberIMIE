import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { MainMenu } from "../MainMenu/mainMenu";
import styles, { Styles } from "./styles";
import "./styles.tsx";
import mapboxgl from 'mapbox-gl';

interface P { }
interface S {
    coords: Array<any>
}
export default class Map extends React.PureComponent<P & WithStyles<Styles>, S> {
    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    public state: Readonly<S>;
    constructor(props: any) {
        super(props)
        this.state = {
            coords: []
        }
    }
    render() {
        const { classes } = this.props;
        const tab = this.state.coords;
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A';
        // eslint-disable-next-line
        let map: mapboxgl.Map = new mapboxgl.Map({
            container: 'map', // Container ID
            style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
            center: [2.3488, 48.8534], // Starting position [lng, lat]
            zoom: 9 // Starting zoom level,
        });
        console.log("center", map.getCenter(), map.getZoom());
        map.on('load', function () {
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': tab
                    }
                }
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#0000FF',
                    'line-width': 8
                }
            });
            console.log('Entrer dans line', tab)
            console.log("center", map.getCenter(), map.getZoom(), map.getSource('route'));
        });

        // map.on('', function () {
        //     map.setZoom(map.getZoom());
        //     map.setCenter(map.getCenter());
        // });



        return (
            <div id="geocoding" className={classes.mainMenu}>
                <MainMenu.Display mapLine={this.addItinaryLine} />
            </div>
        )
    }
    
    addItinaryLine = (coords: Array<any>) => {
    this.setState({
        coords: coords
    })
}
}