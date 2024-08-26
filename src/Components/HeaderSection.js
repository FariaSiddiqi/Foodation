import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/HeaderSection.css";

function HeaderSection() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="headerSection">
                        <h1>Dashboard</h1>
                        <div className="rightSideContent">
                            <button className="startReceivingBtn">Start Receiving</button>
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
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderSection;
