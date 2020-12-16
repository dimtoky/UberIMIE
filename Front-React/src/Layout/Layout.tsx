import * as React from 'react';
import {withStyles, WithStyles } from '@material-ui/core';
import Map from "../components/Map/map";
import styles, { Styles } from "./styles";
import { HeaderBar } from '../components/HeaderBar/headerBar';
import logo_uber from "../icons/uber-driver-logo.png";
import "./styles.tsx";

interface P {}
interface S {}

export class Layout extends React.PureComponent<P & WithStyles<Styles>,S >{

    public static Display = withStyles(styles as any)(Layout) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        return(
            <div className= {classes.layout}>
                <div className={classes.headerBar}>
                <HeaderBar.Display logo={()=>{ return (<img className={classes.logo} src={logo_uber} alt="Uber-Driver"/>) }}  name={ <div> </div> }/>
                </div>
                <Map.Display />
            </div>
        )
    }

}