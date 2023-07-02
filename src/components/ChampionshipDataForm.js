import React from "react";
import { useState} from "react";

function ChampionshipDataForm({titleToEdit, formVisibility}) {
  let [championTeam, setChampionTeam] = useState(titleToEdit ? titleToEdit.team : "")
  if (formVisibility === "visible") {
      console.log("titleToEdit = ", titleToEdit);
      debugger
  }
  return (
    <form style = {{visibility: `${formVisibility}`}}>
       <label for = "team">Team</label>
       <input id= "team" type="text" value = {championTeam} /><br />
    </form>
       
  )
}

export default ChampionshipDataForm