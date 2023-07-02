import React from "react";
import ChampionshipDataForm from "./ChampionshipDataForm"

function Add( {titles}) {
  function handleAddedEntrySubmission(newEntry) {
    console.log(newEntry)
    debugger
  }
  console.log("Add")
  console.log(titles)
  let newEntry = {id:null, team:"", mvp: "", year:"", image: ""}
  return (
    <ChampionshipDataForm titleToEdit = {newEntry} formVisibility = "visible" onDataFormSubmit = {handleAddedEntrySubmission}/>
  )
}

export default Add;