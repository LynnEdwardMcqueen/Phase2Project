import React from "react";
import { useState} from "react";
import SelectTeam from "./SelectTeam.js"

function Edit( {titles}) {
  let [idForEdit, updateEditId] = useState(0)

  function recordEditId(event) {
    console.log("recordEditId = ", Number(event.target.value))
    updateEditId(Number(event.target.value))
  }

  function editTeamSubmitEvent(event) {
    event.preventDefault();
    console.log("Edit team submit received")
    console.log("id for edit = ", idForEdit)
    debugger
  }


  return (
    <div className="Filter">
      <p>Edit</p>
      <SelectTeam titlesList = {titles} actionName = "Edit" onSelectValueChange = {recordEditId} onSubmitHandler = {editTeamSubmitEvent} />
    </div>
  )

}

export default Edit;