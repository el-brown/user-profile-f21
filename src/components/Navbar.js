import React, { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { UserContext } from "../provider/UserProvider";

const Navbar = () => {
  const {firstName} = useContext(UserContext)
  return(
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/user/profile">
      <Menu.Item>
      {firstName}
      </Menu.Item>
    </NavLink>
  </Menu>
  ) 
}

export default Navbar;