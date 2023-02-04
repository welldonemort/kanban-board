import React, { useState } from "react";
import "../Header/Header.css";
import "./Profile.css";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="profile">
      <button className="header__profile" onClick={showDropdown}>
        <div className="profile__photo">
          <img src="./user-avatar.svg" alt="ic: user-avatar" />
        </div>

        <img
          src="./arrow-down.svg"
          alt="ic: arrow-down"
          style={{ transform: isVisible ? "rotate(180deg)" : "none" }}
        />
      </button>

      {isVisible && (
        <div className={`after-click ${isVisible ? "show" : ""}`}>
          <img
            src="./rectangle.svg"
            alt="ic: rectangle"
            className="rectangle"
          />
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Log out</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
