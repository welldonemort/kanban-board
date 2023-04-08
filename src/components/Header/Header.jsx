import React from "react";
import "./Header.css";
import Profile from "../Profile/Profile";
import { useLocation, NavLink } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <NavLink className="header__title" to="/">
        {pathname === "/" ? "Kanban" : "Accounting"}
      </NavLink>

      <Profile />
    </div>
  );
};

export default Header;
