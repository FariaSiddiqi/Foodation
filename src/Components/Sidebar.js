import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleViewAllClick = () => {
    navigate("/my-donors"); // Correct path to MyDonor
  };

  // Function to dynamically set the icon source based on the active state
  const getIconSrc = (baseName) => {
    return location.pathname === `/${baseName}`
      ? `/Images/${baseName}-icon-active.svg`
      : `/Images/${baseName}-icon.svg`;
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
          <div
            className={`listItem ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            <img src={getIconSrc("Dashboard")} alt="Dashboard-icon" />
            <p>Dashboard</p>
          </div>
          <div
            className={`listItem ${location.pathname === "/user-listing" ? "active" : ""
              }`}
            onClick={() => navigate("/user-listing")}
          >
            <img src={getIconSrc("listing")} alt="Listing-icon" />
            <p>User Listing</p>
          </div>
          <div
            className={`listItem ${location.pathname === "/my-donors" ? "active" : ""
              }`}
            onClick={handleViewAllClick}
          >
            <img src={getIconSrc("donators")} alt="Donator-icon" />
            <p>My Donors</p>
          </div>
          <div
            className={`listItem ${location.pathname === "/goals" ? "active" : ""
              }`}
            onClick={() => navigate("/goals")} // Corrected path here
          >
            <img src={getIconSrc("goal")} alt="Goal-icon" />
            <p>Goals</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="settingSection">
          <div
            className={`listItem ${location.pathname === "/settings" ? "active" : ""
              }`}
            onClick={() => navigate("/settings")}
          >
            <img src={getIconSrc("setting")} alt="Setting-icon" />
            <div>Setting</div>
          </div>
          <div
            className={`listItem ${location.pathname === "/sign-out" ? "active" : ""
              }`}
            onClick={() => navigate("/sign-out")}
          >
            <img src={getIconSrc("signout")} alt="SignOut-icon" />
            <div>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
