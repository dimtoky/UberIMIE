import React from "react";
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Map from "./components/Map/Map";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/forgotPassword";

export default function App() {
  return ( 
    <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={SignIn.Display}/>
          <Route exact={true} path='/SignUp' component={SignUp.Display}/>
          <Route exact={true} path= '/drive' component={Map.Display} />
          <Route exact={true} path= '/forgotPassword' component={ForgotPassword.Display} />
          <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
  );
}
