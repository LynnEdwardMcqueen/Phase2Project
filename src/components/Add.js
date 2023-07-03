import React from "react";
import ChampionshipDataForm from "./ChampionshipDataForm"

function Add( {titles, onAddSubmission}) {
  function handleAddedEntrySubmission(newEntry) {
    fetch("http://localhost:4000/Denver-Champions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    .then((r) => r.json())
    .then((newChampionshipEntry) => {
      onAddSubmission(newChampionshipEntry)
    })
  }
  
  console.log("Add")
  console.log(titles)
  let newEntry = {id:null, team:"", mvp: "", year:"", image: ""}
  return (
    <ChampionshipDataForm titleToEdit = {newEntry} formVisibility = "visible" onDataFormSubmit = {handleAddedEntrySubmission}/>
  )
}

export default Add;