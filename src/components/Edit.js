import React from "react";
import { useState} from "react";
import SelectTeam from "./SelectTeam.js"
import ChampionshipDataForm from "./ChampionshipDataForm.js"

function Edit( {titles, onEditSubmit}) {
  let [idForEdit, updateEditId] = useState(0)
  let [inputFormVisibility, updateInputFormVisibility] = useState("hidden")

  function recordEditId(event) {
    updateEditId(Number(event.target.value))
  }

  function editTeamSubmitEvent(event) {
    event.preventDefault();
    updateInputFormVisibility("visible")
  }

  function handleEditUpdate(updatedEntry) {
    updatedEntry.id = idForEdit
    
    fetch(`http://localhost:4000/Denver-Champions/${idForEdit}`, {
      method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team: updatedEntry.team,
          year: updatedEntry.year,
          id: updatedEntry.id,
          mvp: updatedEntry.mvp,
          image: updatedEntry.image
        }),
      })
        .then((r) => r.json())
        .then((updatedData) => {

          console.log(updatedData)
          debugger
          onEditSubmit(updatedData)
        });
  }
 
  function championshipToEdit() {
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
            <ChampionshipDataForm titleToEdit = {championshipToEdit()} formVisibility = {inputFormVisibility} onDataFormSubmit = {handleEditUpdate} />
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