import React from "react";

import JohnElway from '../pictures/John-Elway.jpg'
import JoeSakic from '../pictures/joe-sakic.jpg'
import KaleMakar from '../pictures/kale-makar.jpg'
import NikolaJokic from '../pictures/nikola-jokic.webp'
import PatrickRoy from '../pictures/patrickj-roy.png'
import TerrellDavis from '../pictures/terrell_davis_001.webp'
import ToddHelton from '../pictures/todd-helton.webp'
import VonnMiller from '../pictures/vonn-miller.jpg'





function Cards ({championList}) {
    

  function pictureServer(player) {
    switch (player) {
      case "John Elway" :
        return (JohnElway)
      case "Joe Sakic":
        return (JoeSakic)
      case "Kale Makar":
        return(KaleMakar)
      case "Nikola Jokic":
        return(NikolaJokic)
      case "Patrick Roy":
        return(PatrickRoy)
      case "Todd Helton":
        return(ToddHelton)
      case "Terrell Davis":
        return(TerrellDavis)
      case "Vonn Miller":
        return(VonnMiller)

          
      }
  }
    
  
    return (
    <div>
        {championList.map((title) => {
          return (
            <div key = {title.id} >
              <h1>{title.team}</h1>
              <h2>{title.year}</h2>
              <h3>MVP {title.mvp}</h3>
              <img src={pictureServer(title.mvp)} width="160" height="150" alt="mvp picture" />
            </div>
           )
          })}
    </div>
    )
}
export default Cards;