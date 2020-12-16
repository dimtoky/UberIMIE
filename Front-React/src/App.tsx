import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import { Layout } from "./Layout/Layout";
import "./App.css";

export default function App() {
  return (
         <Layout.Display/>
  );
}
