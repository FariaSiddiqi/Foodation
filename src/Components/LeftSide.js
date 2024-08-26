import React from "react";
// import "../Styles/Leftside.css";

function LeftSide() {
  return (
    <div className="RightSideContainer">
      <div className="headerSection">
        <button>Start Receiving</button>
        <div className="notiBar">
          <img src="/Images/notifcations.svg" alt="notifications-icon" />
        </div>
        <div className="profileSection">
          <img
            src="/Images/profile-ison.svg"
            alt="profile-icon"
            className="profilePic"
          />
          <p>Edhi Foundation</p>
          <img src="/Images/dropdown.svg" alt="dropdown-icon" />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
