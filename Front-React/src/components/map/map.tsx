import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { MainMenu } from "../MainMenu/mainMenu";
import { HistoryMenu } from "../HistoryMenu/historymenu";

import styles, { Styles } from "./styles";
import "./styles.tsx";
import mapboxgl from "mapbox-gl";

interface P {
    isHistory: boolean;
 }
interface S {
    coords: Array<any>;
    center: [number, number];
    zoom: number;
}
export default class Map extends React.PureComponent<P & WithStyles<Styles>, S> {
    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>;
    public state: Readonly<S>;
    constructor(props: any) {
        super(props);
        this.state = {
            coords: [],
            center: [2.3488, 48.8534],
            zoom: 6
        };
    }
    render() {
        const { classes } = this.props;
        const tab: Array<any> = this.state.coords;
        const isHistory =  this.props.isHistory;
        mapboxgl.accessToken =
            "pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A";

        let map: mapboxgl.Map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: this.state.center,
            zoom: this.state.zoom
        });

        map.on("load", function () {
            if (tab.length > 0) {
                new mapboxgl.Marker()
                    .setLngLat(tab[0])
                    .addTo(map);
                new mapboxgl.Marker()
                    .setLngLat(tab[tab.length - 1])
                    .addTo(map);
            }
            map.addSource("route", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {
                        zoom: 10
                    },
                    geometry: {
                        type: "LineString",
                        coordinates: tab,
                    },
                },
            });
            map.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#0000FF",
                    "line-width": 3,
                },
            });
        });
        if (isHistory) {
        return (
            <div id="geocoding" className={classes.mainMenu}>
           
           
           <HistoryMenu.Display mapLine={this.addItinaryLine} />

            </div>
        );
    }else{
    return (
        <div id="geocoding" className={classes.mainMenu}>
       
       <MainMenu.Display mapLine={this.addItinaryLine} />

              

        </div>
    );}
    }

    addItinaryLine = (coords: Array<any>, zoom: number) => {
        this.setState({
            coords: coords,
            center: coords[0],
            zoom: zoom
        });

    };
}
