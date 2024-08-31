import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/HeaderSection.css";

function HeaderSection() {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        console.log('Notification icon clicked'); // Debugging line
        setShowNotifications(!showNotifications);
    };
    console.log('showNotifications:', showNotifications);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="headerSection">
                        <h1>Dashboard</h1>
                        <div className="rightSideContent">
                            <button className="startReceivingBtn">Start Receiving</button>
                            <div className="notiBar" onClick={toggleNotifications}>
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
                    {showNotifications && (
                        <div className="notification-popup show">
                            <div className="notification-item">
                                <img src="/Images/noti-icon.png" alt="food-icon" className="notification-img" />
                                <div className="notification-content">
                                    <p style={{ marginBottom: 0 }} >Malesuada tellus tincidunt fringilla enim, id mauris.</p>
                                    <span className="notification-time">3 mins ago</span>
                                </div>
                                <div className="notification-menu">
                                    <img src="/Images/3-dot menu.png" alt="menu-dots" />
                                </div>
                            </div>
                            {/* Repeat similar notification items as needed */}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderSection;
