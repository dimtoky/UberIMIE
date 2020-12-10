import React from "react";
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import MapL from "./components/map/map";

export default function App() {
  return ( 
    <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={SignUp}/>
          {/* <Route exact={true} path= {'/'} component={App} /> */}
          <Route exact={true} path= {'/drive'} component={MapL.Display} />
        </Switch>
    </BrowserRouter>
  );
}
