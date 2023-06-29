import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Avalanche from "./Avalanche.js"
import Broncos from "./Broncos.js"
import Nuggets from "./Nuggets.js"
import Rockies from "./Rockies.js"
import NavBar from "./NavBar.js"

function App() {
  useEffect(() => {fetch("http://localhost:4000/Denver-Champions")
  .then((response) => response.json())
  .then((data) => {
    console.log("Here at fetch")
    console.log(data)
  });
  }, [] )


  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/Rockies" >
          <Rockies />
        </Route>
        <Route path= "/Broncos" >
          <Broncos />
        </Route>
        <Route path = "/Avalanche">
          <Avalanche />
        </Route>
        <Route path = "/Nuggets">
          <Nuggets />
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
    </Switch>
  </div>
  )
}

export default App;
