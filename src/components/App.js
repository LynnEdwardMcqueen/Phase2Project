import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import './../index.css';
import Avalanche from "./Avalanche.js"
import Broncos from "./Broncos.js"
import Nuggets from "./Nuggets.js"
import Rockies from "./Rockies.js"
import NavBar from "./Navbar.js"
import Home from "./Home.js"
import Add from "./Add.js"
import Delete from "./Delete.js"
import Edit from "./Edit.js"


function App() {
  const [championshipRecords, setChampionshipRecords] = useState([])

  useEffect(() => {fetch("http://localhost:4000/Denver-Champions")
  .then((response) => response.json())
  .then((data) => {
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

  function handleDeletion(deletionIndex) {
    setChampionshipRecords(championshipRecords.filter((championship) => {
      if (championship.id === deletionIndex) {
        return false;
      } else {
        return true;
      }
    }))
  }

  function handleEntryEdit(editedEntry) {
    let updatedChampionshipRecords = [...championshipRecords]
    for (let i = 0; i < updatedChampionshipRecords.length; i++) {
      if (updatedChampionshipRecords[i].id === editedEntry.id) {
        updatedChampionshipRecords[i] = editedEntry
        break
      }
    }
    setChampionshipRecords(updatedChampionshipRecords)
  }

  function addChampionship(newChampionship) {
    setChampionshipRecords([...championshipRecords, newChampionship])
  }

  return (

    <div id = "nav">
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
        <Route path = "/Add">
          <Add titles = {championshipRecords} onAddSubmission = {addChampionship} /> 
        </Route>
        <Route path = "/Delete">
          <Delete titles =  {championshipRecords} onDeletionSubmit = {handleDeletion} />
        </Route>
        <Route path = "/Edit">
          <Edit titles =  {championshipRecords} onEditSubmit = {handleEntryEdit} />
        </Route>

        <Route exact path= "/">
          <Home />
        </Route>
    </Switch>
  </div>
  )
}

export default App;
