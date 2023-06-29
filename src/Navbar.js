import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  console.log("NavBar")
  return <div className = "navbar">
    <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/Avalanche"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Avalanche
      </NavLink>

      <NavLink
        to="/Broncos"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Broncos
      </NavLink>

      <NavLink
        to="/Nuggets"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Nuggets
      </NavLink>

      <NavLink
        to="/Rockies"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Rockies
      </NavLink>
  </div>;
}

export default NavBar;
