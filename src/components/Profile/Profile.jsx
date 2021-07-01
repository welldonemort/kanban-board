import React from 'react';
import '../Header/Header.css';
import './Profile.css';

class Profile extends React.Component {

    showDropdown = () => {
        document.querySelector("#after-click").classList.toggle("show");
        const arrowDown = document.querySelector("#arrow-down-white");
        arrowDown.style.transform = arrowDown.style.transform === "rotate(180deg)" ? "none" : "rotate(180deg)";
    }

    render() {
        return (
            <div className="profile">
                <button className="header__profile" onClick={() => this.showDropdown()}>
                    <div className="profile__photo">
                        <img src="./user-avatar.svg" alt="ic: user-avatar" />
                    </div>
                    <div>
                        <img id="arrow-down-white" src="./arrow-down.svg" alt="ic: arrow-down" />
                    </div>
                </button>
                <div className="after-click" id="after-click">
                    <img src="./rectangle.svg" alt="ic: rectangle" className="rectangle"/>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Log out</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;