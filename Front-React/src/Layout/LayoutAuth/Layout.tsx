import * as React from 'react';
import {withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from "./styles";
import "./styles.tsx";
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import ForgotPassword from '../../components/ForgotPassword/forgotPassword';

interface P {}
interface S {}

export class LayoutAuth extends React.PureComponent<P & WithStyles<Styles>,S >{

    public static Display = withStyles(styles as any)(LayoutAuth) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        return(
            <div className= {classes.layout}>
                <Switch>
                <Route exact={true} path='/auth/signIn' component={SignIn.Display}/>
                <Route exact={true} path='/auth/signUp' component={SignUp.Display}/>
                <Route exact={true} path= '/auth/forgotPassword' component={ForgotPassword.Display} />
                <Redirect to="/auth/signIn"/>
                </Switch>
            </div>
        )
    }

}