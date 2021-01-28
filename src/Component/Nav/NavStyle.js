import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: red;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: Poppins;
  text-transform: uppercase;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 10;
  right: 0;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: space-between;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin-left: 20px;
`;
