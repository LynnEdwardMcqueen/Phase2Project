import React from "react";
import { useState} from "react";

function ChampionshipDataForm({titleToEdit, formVisibility}) {
  let [championTeam, setChampionTeam] = useState(titleToEdit.team)
  let [championYear, setChampionYear] = useState(titleToEdit.year)
  let [championMVP, setChampionMVP] = useState(titleToEdit.mvp)
  let [championMVPPicture, setChampionMVPPicture] = useState(titleToEdit.image)

  function updateTeam(event) {
    setChampionTeam(event.target.value)
  }

  function updateYear(event) {
    setChampionYear(event.target.value)
  }

  function updateMVP(event) {
    setChampionMVP(event.target.value)
  }

  function updateMVPPicture(event) {
    setChampionMVPPicture(event.target.value)
  }

  function handleSubmitEvent(event) {
    event.preventDefault();
    let editedEntry = {id:null, team: championTeam, year: championYear, mvp: championMVP, image: championMVPPicture}
    return(editedEntry)
  }
  
  return (
    <form style = {{visibility: `${formVisibility}`} }>
      <label htmlFor = "team">Team</label>
      <input id= "team" type="text" value = {championTeam} onChange = {updateTeam} /><br />
      <label htmlFor = "year">Year</label>
      <input id = "year" type = "number" value = {championYear} onChange = {updateYear} /> <br />
      <label htmlFor = "mvp">MVP</label>
      <input id = "mvp" type = "text" value = {championMVP} onChange = {updateMVP} /> <br />
      <label htmlFor = "mvpPicture">MVP Image</label>
      <input id = "mvpPicture" type = "text" value = {championMVPPicture} onChange = {updateMVPPicture} />
      <input type = "submit" onSubmit = {handleSubmitEvent} />
    </form>
  )
}


export default ChampionshipDataForm