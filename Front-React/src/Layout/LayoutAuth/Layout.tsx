import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from "./styles";
import "./styles.tsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import ForgotPassword from '../../components/ForgotPassword/forgotPassword';
import { LayoutGame } from '../LayoutGame/Layout';
import { LayoutHistory } from '../LayoutHistory/Layout';

interface P { }
interface S { }

export class LayoutAuth extends React.PureComponent<P & WithStyles<Styles>, S>{

    public static Display = withStyles(styles as any)(LayoutAuth) as React.ComponentType<P>

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/auth/signIn' component={SignIn.Display} />
                        <Route exact path='/auth/signUp' component={SignUp.Display} />
                        <Route exact path='/auth/forgotPassword' component={ForgotPassword.Display} />
                        <Route exact path='/drive' component={LayoutGame.Display} />
                        <Route exact path='/history' component={LayoutHistory.Display} />

                        <Redirect to="/auth/signIn" />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}