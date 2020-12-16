import * as React from 'react';
import {withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from "./styles";
import "./styles.tsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LayoutGame } from './LayoutGame/Layout';
import { LayoutAuth } from './LayoutAuth/Layout';

interface P {}
interface S {}

export class Layout extends React.PureComponent<P & WithStyles<Styles>,S >{

    public static Display = withStyles(styles as any)(Layout) as React.ComponentType<P>

    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route   path='/auth/' component={LayoutAuth.Display}/>
                <Route   path='/drive/' component={LayoutGame.Display}/>
                </Switch>
            </BrowserRouter>
        )
    }

}