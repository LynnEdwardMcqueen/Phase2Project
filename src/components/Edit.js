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
  }

  function championshipToEdit() {
    debugger
    for (let i = 0; i < titles.length; i++) {
        if (titles[i].id === idForEdit) {
            return(titles[i])
        }
    }
    return{}
  }

  function setupReturnValue() {
    if (inputFormVisibility === "visible") {
        return (
          <>
            <SelectTeam titlesList = {titles} actionName = "Edit" onSelectValueChange = {recordEditId} onSubmitHandler = {editTeamSubmitEvent} />
            <ChampionshipDataForm titleToEdit = {championshipToEdit()} formVisibility = {inputFormVisibility} />
          </>
        )
    } else {
      return (
        <>
          <SelectTeam titlesList = {titles} actionName = "Edit" onSelectValueChange = {recordEditId} onSubmitHandler = {editTeamSubmitEvent} />
        </>
      )
    }
  }


  return (
    <div className="Filter">
      <p>Edit</p>
      {setupReturnValue()} 
    </div>
  )

}

export default Edit;