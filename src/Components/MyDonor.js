import React from "react";
import "../Styles/LeaderBoardPage.css";
import HeaderSection from "./HeaderSection";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeaderBoard from "./Leaderboard";

const users = Array(12).fill({
    name: "Alan Cain",
    donations: "34.5k",
    FoodList: "Biryani",
    DateTime: "04 April, 2021 | 04:00 pm",
    points: 44,
    image: "/Images/leaderboardProfile.svg", // Placeholder image
});

const MyDonor = () => {
    return (
        <Container fluid className="leaderboard-page-container">
            <Row>
                {/* Sidebar on the left */}
                <Col xs={12} md={3} className="sidebar-container">
                    <Sidebar />
                </Col>

                {/* Main content area */}
                <Col xs={12} md={6} className="main-content-container">
                    {/* Header Section in the top center */}
                    <Row>
                        <Col xs={12} className="header-container">
                            <HeaderSection />
                        </Col>
                    </Row>

                    {/* Recent Activity Table */}
                    <Row>
                        <Col xs={12}>
                            <div className="content">
                                <div className="header">
                                    <h2>Recent Activity</h2>
                                </div>
                                <div className="leaderboard">
                                    <div className="searchbarSection">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="search-bar"
                                        />
                                        <div className="Sorting">
                                            <span>Sort By</span>
                                            <img src="/Images/arrow-up-down.svg" alt="Sort Icon" />
                                        </div>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Donor Name</th>
                                                <th>Food List</th>
                                                <th>Date & Time</th>
                                                <th>Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <img
                                                            src={user.image}
                                                            alt="User"
                                                            className="user-image"
                                                        />
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.FoodList}</td>
                                                    <td>{user.DateTime}</td>
                                                    <td>{user.points}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* LeaderBoard on the right */}
                <Col xs={12} md={3} className="leaderboard-container">
                    <LeaderBoard />
                </Col>
            </Row>
        </Container>
    );
};

export default MyDonor;
