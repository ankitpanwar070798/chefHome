import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/chefhome.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar /> 
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #e6fcff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto  ;
    max-width: 18%;
  }
`;

export default Header;
