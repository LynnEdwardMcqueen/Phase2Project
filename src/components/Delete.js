import React from "react";
import { useState} from "react";

function Delete( {titles, onDeletionSubmit} ) {
  let [idForDeletion, updateDeletionId] = useState(0)
  
  function handleItemDeletionSubmitEvent(event) {
    event.preventDefault();
    fetch(`http://localhost:4000/Denver-Champions/${idForDeletion}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeletionSubmit(idForDeletion));
  }

  function recordDeletionId(event) {
    console.log("recordDeletionId = ", event.target.value)
    debugger
    updateDeletionId(event.target.value)
  }



  return (
    <div className="Filter">
      <form className="DeleteItem" onSubmit= {handleItemDeletionSubmitEvent}>
        <p>Which championship do you want to delete?</p>


        <select name="deteteChampion" onChange={recordDeletionId} >
          <option value = "0">None</option>
          {titles.map((title) => {
            return (
              <option key = {title.id} value = {title.id}>{title.year + " " + title.team}</option>
            )
          })}
        </select>

        <button type="submit"> Choose Title To Delete </button>

      </form>
    </div>
  )
}

export default Delete;