import React from "react";
import { useState} from "react";

function ChampionshipDataForm({titleToEdit, formVisibility}) {


debugger

  let [championTeam, setChampionTeam] = useState(titleToEdit.team)
  let [championYear, setChampionYear] = useState(titleToEdit.year)
  let [championMVP, setChampionMVP] = useState(titleToEdit.mvp)
  let [championMVPPicture, setChampionMVPPicture] = useState(titleToEdit.image)
  return (
    <form style = {{visibility: `${formVisibility}`}}>
      <label htmlFor = "team">Team</label>
      <input id= "team" type="text" value = {championYear} /><br />
      <label htmlFor = "year">Year</label>
      <input id = "year" type = "number" value = {championYear} /> <br />
      <label htmlFor = "mvp">MVP</label>
      <input id = "mvp" type = "text" value = {championMVP} /> <br />
      <label htmlFor = "mvpPicture">MVP Image</label>
      <input id = "mvpPicture" type = "text" value = {championMVPPicture} />
    </form>
  )
}


export default ChampionshipDataForm