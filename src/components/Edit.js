import React from "react";
import { useState} from "react";
import SelectTeam from "./SelectTeam.js"
import ChampionshipDataForm from "./ChampionshipDataForm.js"

function Edit( {titles}) {
  let [idForEdit, updateEditId] = useState(0)
  let [inputFormVisibility, updateInputFormVisibility] = useState("hidden")

  function recordEditId(event) {
    console.log("recordEditId = ", Number(event.target.value))
    updateEditId(Number(event.target.value))
  }

  function editTeamSubmitEvent(event) {
    event.preventDefault();
    console.log("Edit team submit received")
    console.log("id for edit = ", idForEdit)
    updateInputFormVisibility("visible")
    debugger
  }




  return (
    <div className="Filter">
      <p>Edit</p>
      <SelectTeam titlesList = {titles} actionName = "Edit" onSelectValueChange = {recordEditId} onSubmitHandler = {editTeamSubmitEvent} />
      <ChampionshipDataForm  formVisibility = {inputFormVisibility} />
    </div>
  )

}

export default Edit;