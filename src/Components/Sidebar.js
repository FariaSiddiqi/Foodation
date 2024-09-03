import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import CreateGoalModal from "./CreateGoalModal"; // Import the modal component

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleViewAllClick = () => {
    navigate("/my-donors");
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getIconSrc = (baseName) => {
    return location.pathname === `/${baseName.toLowerCase()}`
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
        <div className="GoalButton" onClick={handleShow}>
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
            onClick={() => navigate("/goals")}
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
      {/* Modal */}
      <CreateGoalModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Sidebar;
