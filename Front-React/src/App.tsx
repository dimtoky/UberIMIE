import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LayoutAuth } from "./Layout/LayoutAuth/Layout";
import { LayoutGame } from "./Layout/LayoutGame/Layout";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/auth' component={LayoutAuth.Display} />
            <Route path='/drive' component={LayoutGame.Display} />
            <Redirect to="/auth/signIn" />
        </Switch>
    </BrowserRouter>
  );
}
