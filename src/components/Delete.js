import React from "react";
import { useState} from "react";
import SelectTeam from "./SelectTeam.js"

function Delete( {titles, onDeletionSubmit} ) {
  let [idForDeletion, updateDeletionId] = useState(0)
  
  function handleItemDeletionSubmitEvent(event) {
    event.preventDefault();
    fetch(`http://localhost:4000/Denver-Champions/${idForDeletion}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
        if (Number.isInteger(idForDeletion)) {
            console.log("idForDeletion Integer")
        } else {
            console.log("idForDeletion !Integer")
        }
        console.log("idForDeletion = ", typeof(idForDeletion))
        onDeletionSubmit(idForDeletion)
    })
  }


  function recordDeletionId(event) {
    console.log("recordDeletionId = ", Number(event.target.value))
    debugger
    updateDeletionId(Number(event.target.value))
  }



  return (
    <div className="Filter">
      <p>Delete</p>
      <SelectTeam titlesList = {titles} actionName = "delete" onSelectValueChange = {recordDeletionId} onSubmitHandler = {handleItemDeletionSubmitEvent} />
    </div>
  )
}

export default Delete;