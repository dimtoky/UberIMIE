import React from "react";
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import MapL from "./components/Map/Map";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

export default function App() {
  return ( 
    <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={SignIn.Display}/>
          <Route exact={true} path='/SignUp' component={SignUp.Display}/>
          <Route exact={true} path= '/drive' component={MapL.Display} />
        </Switch>
    </BrowserRouter>
  );
}
