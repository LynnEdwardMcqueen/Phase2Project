import React from "react";
import Cards from "./Cards.js"

function Avalanche({titles} ) {
  console.log("Avalanche")
  console.log(titles)
  return (
    <Cards championList = {titles} />  
  )
}

export default Avalanche;