import React from "react";
function ChampionshipDataForm({titleToEdit, formVisibility}) {
    if (formVisibility === "visible") {
        console.log("titleToEdit = ", titleToEdit);
        debugger
    }
    return (
        <p style = {{visibility: `${formVisibility}`}}> Here in championshipDataForm </p>
    )
}

export default ChampionshipDataForm