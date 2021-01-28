import React from "react";
// import {} from "react-router-dom";
import { Nav, NavLink, Bars, NavIcon } from "./NavStyle";

const NavMenu = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Peter</NavLink>
        <NavIcon>
          Menu
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default NavMenu;
