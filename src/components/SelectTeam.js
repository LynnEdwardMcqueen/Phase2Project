import React from "react";


function SelectTeam({titlesList, actionName, onSelectValueChange, onSubmitHandler}) {

  return(
    <form className="DeleteItem" onSubmit= {onSubmitHandler}>
      <p>Which championship do you want to {actionName}?</p>



      <select onChange={onSelectValueChange} >
        <option value = "0">None</option>
          {titlesList.map((title) => {
          return (
              <option key = {title.id} value = {title.id}>{title.year + " " + title.team}</option>
           )
          })}
      </select>

      <button type="submit"> Submit title To {actionName} </button>

    </form> )
}

export default SelectTeam;