import React from "react";
import "../Styles/LeaderBoardPage.css";
import HeaderSection from "./HeaderSection";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const users = Array(12).fill({
    name: "Alan Cain",
    donations: "34.5k",
    points: 44,
    image: "/Images/leaderboardProfile.svg", // Placeholder image
});

const LeaderboardPage = () => {
    return (
        <Container fluid className="leaderboard-page-container">
            {/* Row for Sidebar and Main Content */}
            <Row>
                {/* Sidebar on the left */}
                <Col xs={12} md={3} className="sidebar-container">
                    <Sidebar />
                </Col>

                {/* Main content area */}
                <Col xs={12} md={9} className="main-content-container">
                    {/* Header Section in the top center */}
                    <Row>
                        <Col xs={12} className="header-container">
                            <HeaderSection />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <div className="content">
                                <div className="header">
                                    <h2>Leader board</h2>


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
                                            <img src="/Images/arrow-up-down.svg" alt="goal Basket" />

                                        </div>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Donations</th>
                                                <th>Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={user.image}
                                                            alt="User"
                                                            className="user-image"
                                                        />
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.donations}</td>
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
            </Row>
        </Container>
    );
};

export default LeaderboardPage;
