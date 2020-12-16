import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/forgotPassword";
import ResetPassword from "./components/ResetPassword/resetPassword";
import { Layout } from "./Layout/Layout";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={SignIn.Display}/>
          <Route exact={true} path='/SignUp' component={SignUp.Display}/>
          <Route exact={true} path= '/drive' component={Layout.Display} />
          <Route exact={true} path= '/forgotPassword' component={ForgotPassword.Display} />
          <Route exact={true} path= '/resetpassword/:token' component={ResetPassword.Display} />
          <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
  );
}
