import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MainMenu } from "../MainMenu/mainMenu";
import styles,{ Styles } from "./styles";
import "./styles.tsx";

interface P {}
export default class Map extends React.PureComponent<P & WithStyles<Styles> > {
    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    render(){
        const { classes } = this.props;
        const position: any = [51.505, -0.09];
        return (
            <div className={classes.container}>
                <MapContainer id="map" className={classes.map} center={position} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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