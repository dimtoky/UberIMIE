import * as React from 'react';
import {withStyles, WithStyles } from '@material-ui/core';
import Map from "../../components/map/map";
import styles, { Styles } from "./styles";
import { HeaderBar } from '../../components/HeaderBar/headerBar';
import logo_uber from "../../icons/uber-driver-logo.png";
import "./styles.tsx";
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

interface P {}
interface S {}

export class LayoutGame extends React.PureComponent<P & WithStyles<Styles>,S >{

    public static Display = withStyles(styles as any)(LayoutGame) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        return(
            <div className= {classes.layout}>
                <div className={classes.headerBar}>
                <HeaderBar.Display logo={()=>{ return (<img className={classes.logo} src={logo_uber} alt="Uber-Driver"/>) }}  name={ <div> </div> }/>
                </div>
                <Map.Display />
                <BrowserRouter>
                    <Switch>
                        <Redirect to="/drive"/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}