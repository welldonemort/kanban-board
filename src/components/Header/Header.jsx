import React from "react";
import "./Header.css";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Kanban Board</h1>
      <Profile />
    </div>
  );
};

export default Header;
