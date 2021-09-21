import React, { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import styled from "styled-components";
import { UserContext } from "../provider/UserProvider";
import { primaryColor } from "./Colors";

const Navbar = () => {
  const {firstName} = useContext(UserContext)
  return(
  <Menu>
    <NavLink to="/">
    <Background>
      <Menu.Item>
        Home
      </Menu.Item>
    </Background>
    </NavLink>
    <NavLink to="/user/profile">
      <Menu.Item>
      {firstName}
      </Menu.Item>
    </NavLink>
    <NavLink to="/user/landscape">
      <Menu.Item>
      Landscapes
      </Menu.Item>
    </NavLink>
  </Menu>
  ) 
}

export default Navbar;

const Background = styled.div`
  background-color: ${primaryColor};
`