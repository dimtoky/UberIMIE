import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MainMenu } from "../MainMenu/mainMenu";
import styles,{ Styles } from "./styles";
import "./styles.tsx";
interface P {}
interface S {
    lng: number,
    lat: number,
    zoom: number
}
export default class Map extends React.PureComponent<P & WithStyles<Styles>, S > {
    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    render(){
        const { classes } = this.props;
        const position: any = [51.505, -0.09];
        return (
            <div className={classes.container}>
                <MapContainer id="map" className={classes.map} center={position} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A"
                    />
                    <Marker position={position}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <div className={classes.mainMenu}>
                 <MainMenu.Display/> 
                </div>
            </div>
        )
    }
}