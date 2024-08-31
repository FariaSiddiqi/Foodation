import React from "react";
import "../Styles/RecentActivity.css";
import { useNavigate } from "react-router-dom";


function RecentActivity() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/recent-activity"); // Navigate to the RecentActivityPage
  };

  return (
    <div className="RecentActivityContainer">
      <h2>Recent Activity</h2>

      <div className="RecentActivityContent">
        <div className="RecentActivityCards">
          <div className="RecentActivity-card">
            <div className="donor-details">
              <img src="/Images/fruitBasket.png" alt="basket-icon" />
              <div className="donor-detail-content">
                <h3>Donor Name</h3>
                <p>04 April, 2021 | + 04:00 PM</p>
              </div>
            </div>
          </div>
          <div className="board-card">
            <div className="donor-details">
              <img src="/Images/fruitBasket.png" alt="basket-icon" />
              <div className="donor-detail-content">
                <h3>Donor Name</h3>
                <p>04 April, 2021 | + 04:00 PM</p>
              </div>
            </div>
          </div>
          <div className="board-card">
            <div className="donor-details">
              <img src="/Images/fruitBasket.png" alt="basket-icon" />
              <div className="donor-detail-content">
                <h3>Donor Name</h3>
                <p>04 April, 2021 | + 04:00 PM</p>
              </div>
            </div>
          </div>
          <div className="board-card">
            <div className="donor-details">
              <img src="/Images/fruitBasket.png" alt="basket-icon" />
              <div className="donor-detail-content">
                <h3>Donor Name</h3>
                <p>04 April, 2021 | + 04:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-button" onClick={handleViewAllClick}>
          <span>View All</span>
          <img src="/Images/arrow-right.png" alt="arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
