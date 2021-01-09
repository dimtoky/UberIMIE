import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { MainMenu } from "../MainMenu/mainMenu";
import styles, { Styles } from "./styles";
import "./styles.tsx";
import mapboxgl from 'mapbox-gl';

interface P { }
interface S {
    coordonee: mapboxgl.LngLat
    zoom: number
}
export default class Map extends React.PureComponent<P & WithStyles<Styles>, S> {
    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    public state: Readonly<S>;
    // public map: mapboxgl.Map;
    constructor(props: any) {
        super(props);
        this.state = {
            coordonee: new mapboxgl.LngLat(2.3488, 48.8534),
            zoom: 9
        };
    }

    render() {
        const { classes } = this.props;
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A';
        // eslint-disable-next-line
        const map: mapboxgl.Map = new mapboxgl.Map({
            container: 'map', // Container ID
            style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
            center: [this.state.coordonee.lng, this.state.coordonee.lat], // Starting position [lng, lat]
            zoom: this.state.zoom // Starting zoom level,
        });
        return (
            <div>
               
            </div>
        )
    }
}