import React from "react";
import { useState} from "react";

function ChampionshipDataForm({titleToEdit, formVisibility}) {
  let [championTeam, setChampionTeam] = useState(titleToEdit ? titleToEdit.team : "")
  let [championYear, setChampionYear] = useState(titleToEdit ? titleToEdit.year : "")
  let [championMVP, setChampionMVP] = useState(titleToEdit ? titleToEdit.mvp : "")
  if (formVisibility === "visible") {
      console.log("titleToEdit = ", titleToEdit);
      debugger
  }
  return (
    <form style = {{visibility: `${formVisibility}`}}>
       <label for = "team">Team</label>
       <input id= "team" type="text" value = {championTeam} /><br />
       <label for = "year">Year</label>
       <input id = "year" type = "number" value = {championYear} /> <br />
       <label for = "mvp">MVP</label>
       <input id = "mvp" type = "text" />
    </form>
       
  )
}

export default ChampionshipDataForm