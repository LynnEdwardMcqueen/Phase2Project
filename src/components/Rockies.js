import React from "react";
import Cards from "./Cards.js"

function Rockies({titles} ) {
  console.log("Rockies")
  console.log(titles)
  return (
    <Cards championList = {titles} />
  )
}

export default Rockies;