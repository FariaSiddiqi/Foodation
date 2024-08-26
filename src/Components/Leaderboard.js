import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LeaderBoard.css";
import RecentActivity from "./RecentActivity";

const leaderboardData = [
  { rank: 1, name: "Amirah", donations: "4.5k", points: 44 },
  { rank: 2, name: "James", donations: "3.8k", points: 39 },
  { rank: 3, name: "Sophia", donations: "3.5k", points: 37 },
  { rank: 4, name: "Liam", donations: "3.2k", points: 34 },
];

function LeaderBoard() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/leaderboard"); // Navigate to the LeaderboardPage
  };

  return (
    <div className="leaderBoardContainer">
      <h2>Leader board</h2>
      <div className="leaderBoardContent">
        <div className="leaderBoardCards">
          {leaderboardData.map((user) => (
            <div key={user.rank} className="board-card">
              <div className="card-details">
                <div className="card-person-detail">
                  <span>{user.rank}.</span>
                  <img src="/Images/leaderboardProfile.svg" alt="profile-icon" />
                  <div className="person-detail">
                    <h3>{user.name}</h3>
                    <div className="text">
                      <img src="/Images/greenLine.png" alt="status-icon" />
                      <p>Donations {user.donations}</p>
                    </div>
                  </div>
                </div>
                <div className="coin-details">
                  <img src="/Images/coinicon.svg" alt="coin-icon" />
                  <p>{user.points}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-button" onClick={handleViewAllClick}>
          <span>View All</span>
          <img src="/Images/arrow-right.png" alt="arrow-right" />
        </div>
      </div>
      <RecentActivity />
    </div>
  );
}

export default LeaderBoard;
