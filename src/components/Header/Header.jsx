import React from "react";
import "./Header.css";
import Profile from "../Profile/Profile";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <h1 className="header__title">
        {pathname === "/" ? "Kanban Board" : "Accounting"}
      </h1>

      <Profile />
    </div>
  );
};

export default Header;
