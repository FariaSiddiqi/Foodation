import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MiddleSection from "./Components/MiddleSection";
import HeaderSection from "./Components/HeaderSection";
import LeaderBoard from "./Components/Leaderboard";
import LeaderboardPage from "./Components/LeaderboardPage";
import RecentActivityPage from "./Components/RecentActivityPage";
import MyDonor from "./Components/MyDonor";
import GoalPage from "./Components/GoalPage";
import UserListing from "./Components/UserListing";
import Login from "./Components/Login";
import SelectionPage from "./Components/SelectionPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // Custom component to handle conditional rendering of HeaderSection
  const HeaderSectionWrapper = () => {
    const { email } = useParams();
    return <HeaderSection email={email} />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid>
              <Row className="justify-content-between">
                <Col xs={12} md={3} className="mb-4 mb-md-0">
                  <Sidebar />
                </Col>
                <Col xs={12} md={6} className="mb-4 mb-md-0">
                  <HeaderSection />
                  <MiddleSection />
                </Col>
                <Col xs={12} md={3} className="mb-4">
                  <LeaderBoard />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/recent-activity" element={<RecentActivityPage />} />
        <Route path="/my-donors" element={<MyDonor />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/user-listing" element={<UserListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selection-page" element={<SelectionPage />} />
        <Route path="/profile/:email" element={<HeaderSectionWrapper />} /> {/* Pass email to HeaderSection */}
      </Routes>
    </Router>
  );
}

export default App;
