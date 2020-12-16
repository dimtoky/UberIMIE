import * as React from 'react';
import {withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from "./styles";
import "./styles.tsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import ForgotPassword from '../../components/ForgotPassword/forgotPassword';

interface P {}
interface S {}

export class LayoutAuth extends React.PureComponent<P & WithStyles<Styles>,S >{

    public static Display = withStyles(styles as any)(LayoutAuth) as React.ComponentType<P>

    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route path='/' component={SignIn.Display}/>
                <Route path='/SignUp' component={SignUp.Display}/>
                <Route path= '/forgotPassword' component={ForgotPassword.Display} />
                <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }

}