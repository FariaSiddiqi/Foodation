import React, { useState } from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      <div className="menuIcon" onClick={toggleSidebar}>
        <img src="/Images/menu.svg" alt="menu-icon" />
      </div>
      <div className={`Container ${isOpen ? "open" : ""}`}>
        <div className="closeButton" onClick={toggleSidebar}>
          <img src="/Images/close-circle.svg" alt="close-icon" />
        </div>
        <div>
          <img src="/Images/logo.png" alt="logo-icon" />
        </div>
        <div className="GoalButton">
          <img src="/Images/add-circle.svg" alt="CreateGoal-icon" />
          <button>Create Goal</button>
        </div>
        <div className="sideBarListContainer">
          <div className="listItem">
            <img src="/Images/Dashboard-icon.svg" alt="Dashboard-icon" />
            <p className="active">Dashboard</p>
          </div>
          <div className="listItem">
            <img src="/Images/listing-icon.svg" alt="Listing-icon" />
            <p>User Listing</p>
          </div>
          <div className="listItem">
            <img src="/Images/donators-icon.svg" alt="Donator-icon" />
            <p>My Donators</p>
          </div>
          <div className="listItem">
            <img src="/Images/goal-icon.svg" alt="Goal-icon" />
            <p>Goals</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="settingSection">
          <div className="listItem">
            <img src="/Images/setting-icon.svg" alt="Setting-icon" />
            <div>Setting</div>
          </div>
          <div className="listItem">
            <img src="/Images/signout-icon.svg" alt="SignOut-icon" />
            <div>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
