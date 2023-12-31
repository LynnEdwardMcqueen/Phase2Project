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
        onDeletionSubmit(idForDeletion)
    })
  }


  function recordDeletionId(event) {
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