import React from "react";
import "../Styles/UserListing.css";
import HeaderSection from "./HeaderSection";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeaderBoard from "./Leaderboard";  // Corrected import statement

const donationCards = Array(6).fill({
    id: 1,
    imageUrl: "/Images/Daalchawal.png", // Placeholder image
    title: "Daal Chawal (10 kg)",
    location: "Gulshan Chorangi, Plot 88",
    donorName: "Donor Name",
    donationTime: "5h",
    experience: "Exp 3/12/2023",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla porta sed consequat sed ut. Id urna consequat massa ultrices lobortis.",
});

const UserListing = () => {
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

                    {/* User Listing Section */}
                    <Row>
                        <Col xs={12}>
                            <div className="user-listing">
                                <div className="search-and-filter">
                                    <input
                                        type="text"
                                        placeholder="Search ran, user"
                                        className="search-bar"
                                    />
                                    <div className="apply-filter-button">
                                        <button>Apply Filter</button>
                                        <img src="/Images/filter.png" alt="filter-btn" />

                                    </div>
                                </div>
                                <div className="donation-cards">
                                    {donationCards.map((card, index) => (
                                        <div key={index} className="donation-card">
                                            <img src={card.imageUrl} alt={card.title} className="donation-image" />
                                            <div className="text-overlay">
                                                <div className="donation-title">{card.title}</div>
                                                <div className="donation-location">{card.location}</div>
                                            </div>
                                            <div className="donation-info">
                                                <div className="donor-details">
                                                    <span className="donor-name">{card.donorName}</span>
                                                    <div className="donation-timeLocation">
                                                        <span className="donation-time">{card.donationTime}</span>
                                                        <span className="experience">{card.experience}</span>
                                                    </div>

                                                </div>
                                                <p className="donation-description">{card.description}</p>
                                                <button className="accept-donation-button">Accept Donation</button>
                                            </div>
                                            <button className="more-options-button">
                                                <i className="more-icon"></i>
                                            </button>
                                        </div>
                                    ))}
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

export default UserListing;
