import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Map from "../../components/map/map";
import styles, { Styles } from "./styles";
import { HeaderBar } from '../../components/HeaderBar/headerBar';
import logo_uber from "../../assets/icons/uber-driver-logo.png";
import "./styles.tsx";
import { BrowserRouter } from 'react-router-dom';
import { MapContainer } from 'react-leaflet';

interface P { }
interface S { }

export class LayoutHistory extends React.PureComponent<P & WithStyles<Styles>, S>{
    public static Display = withStyles(styles as any)(LayoutHistory) as React.ComponentType<P>

    render() {
        
        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <div className={classes.headerBar}>
                    <HeaderBar.Display logo={() => { return (<img className={classes.logo} src={logo_uber} alt="Uber-Driver" />) }} name={<div> </div>} />
                </div>
                <MapContainer id="map" className={classes.map} center={[2.3488, 48.8534]} zoom={6}>
                    <Map.Display isHistory={true}/>
                </MapContainer>

                <BrowserRouter>
            
                </BrowserRouter>
            </div>
        )
    }

}