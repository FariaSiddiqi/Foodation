import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MiddleSection from "./Components/MiddleSection";
import HeaderSection from "./Components/HeaderSection";
import LeaderBoard from "./Components/Leaderboard";
import LeaderboardPage from "./Components/LeaderboardPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page with LeaderBoard on the right */}
        <Route
          path="/"
          element={
            <Container fluid>
              <Row className="justify-content-between">
                {/* Sidebar */}
                <Col xs={12} md={3} className="mb-4 mb-md-0">
                  <Sidebar />
                </Col>

                {/* Middle Section */}
                <Col xs={12} md={6} className="mb-4 mb-md-0">
                  <HeaderSection />
                  <MiddleSection />
                </Col>

                {/* LeaderBoard on the right */}
                <Col xs={12} md={3} className="mb-4">
                  <LeaderBoard /> {/* Remove d-none and d-md-block */}
                </Col>
              </Row>
            </Container>
          }
        />

        {/* Route for the LeaderboardPage */}
        <Route
          path="/leaderboard"
          element={
            <Container fluid>
              <Row>
                <Col xs={12}>
                  <LeaderboardPage /> {/* Render LeaderboardPage on a new page */}
                </Col>
              </Row>
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
