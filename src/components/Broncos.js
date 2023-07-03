import React from "react";
import Cards from "./Cards.js"

function Broncos( {titles}) {
  console.log("Broncos")
  console.log(titles)
  return (
    <Cards championList = {titles} />
  )
}

export default Broncos;