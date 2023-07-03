import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  
  return <div className = "navbar">
    <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/Avalanche"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Avalanche
      </NavLink>

      <NavLink
        to="/Broncos"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Broncos
      </NavLink>

      <NavLink
        to="/Nuggets"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Nuggets
      </NavLink>

      <NavLink
        to="/Rockies"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Rockies
      </NavLink>

      <NavLink
        to="/Add"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Add
      </NavLink>
      <NavLink
        to="/Delete"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Delete
      </NavLink>

      <NavLink
        to="/Edit"
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightblue",
        }}
      >
        Edit
      </NavLink>
  </div>;
}

export default NavBar;
