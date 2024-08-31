import React, { useState } from "react";
import "../Styles/LeaderBoardPage.css";
import HeaderSection from "./HeaderSection";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeaderBoard from "./Leaderboard";
import GoalItem from "./GoalItem";
import CreateGoalModal from "./CreateGoalModal"; // Import the modal component

const goals = Array(12).fill({
    goalImage: '/Images/goalBasket.png',
    title: 'Donate a basket of fruit',
    description: '2 apples, 4 bananas, ...',
    progress: 100,
    enrolled: '32/40',
    rewardPoints: 200,
});

const GoalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

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
                    <HeaderSection />

                    {/* Goals Section */}
                    <div className="goals-container">
                        <div className="goals-header">
                            <div className="tabs">
                                <button className="tab active">
                                    Unfinished Goals <span className="tab-count">10</span>
                                </button>
                                <button className="tab">
                                    Completed Goals <span className="tab-count">10</span>
                                </button>
                            </div>
                            <button className="create-goal-button" onClick={handleShow}>
                                Create New Goal
                            </button>
                        </div>
                        {goals.map((goal, index) => (
                            <GoalItem key={index} {...goal} />
                        ))}
                    </div>
                </Col>

                {/* LeaderBoard on the right */}
                <Col xs={12} md={3} className="leaderboard-container">
                    <LeaderBoard />
                </Col>
            </Row>

            {/* Modal */}
            <CreateGoalModal show={showModal} handleClose={handleClose} />
        </Container>
    );
};

export default GoalPage;
