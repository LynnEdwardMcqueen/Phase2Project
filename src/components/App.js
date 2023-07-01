import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Avalanche from "./Avalanche.js"
import Broncos from "./Broncos.js"
import Nuggets from "./Nuggets.js"
import Rockies from "./Rockies.js"
import NavBar from "./Navbar.js"
import Home from "./Home.js"
import Delete from "./Delete.js"
import Edit from "./Edit.js"

function App() {
  const [championshipRecords, setChampionshipRecords] = useState([])

  useEffect(() => {fetch("http://localhost:4000/Denver-Champions")
  .then((response) => response.json())
  .then((data) => {
    console.log("Here at fetch")
    console.log(data)
    setChampionshipRecords(data)
  });
  }, [] )


  function championshipRecordsFilter( desiredTeam ) {
    return (championshipRecords.filter((title) => {
      if (title.team === desiredTeam) {
        return true
      } else {
        return false
      }
    }))
  }


  return (

    <div>
      <NavBar/>
      <Switch>
        <Route path="/Rockies" >
          <Rockies titles = {championshipRecordsFilter("Rockies")} />
        </Route>
        <Route path= "/Broncos" >
          <Broncos titles = {championshipRecordsFilter("Broncos")} />
        </Route>
        <Route path = "/Avalanche">
          <Avalanche titles = {championshipRecordsFilter("Avalanche")} />
        </Route>
        <Route path = "/Nuggets">
          <Nuggets titles = {championshipRecordsFilter("Nuggets")} />
        </Route>
        <Route path = "/Delete">
          <Delete titles =  {championshipRecords}/>
        </Route>
        <Route path = "/Edit">
          <Edit titles =  {championshipRecords} />
        </Route>

        <Route exact path= "/">
          <Home />
        </Route>
    </Switch>
  </div>
  )
}

export default App;
