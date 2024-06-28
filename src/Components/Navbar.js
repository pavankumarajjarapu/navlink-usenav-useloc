import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let navHighlight = (highlight) => {
    if (highlight.isActive == true) {
      return {
        backgroundColor: "palegreen",
        color: "gray",
        borderRadius: "12px",
      };
    }
  };
  return (
    <div>
      <nav>
        <NavLink
          to={"/"}
          style={(highlight) => {
            return navHighlight(highlight);
          }}
        >
          HOME
        </NavLink>
        <NavLink to={"/login"} style={(highlight)=>{return navHighlight(highlight)}} >LOGIN</NavLink>
        <NavLink to={"/dashboard"} style={(highlight)=>{return navHighlight(highlight)}}>Dashboard</NavLink>
        <NavLink to={"/signup"} style={(highlight)=>{return navHighlight(highlight)}}>SIGNUP</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
