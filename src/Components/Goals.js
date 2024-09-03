import React, { useState } from "react";
import GoalItem from './GoalItem';
import '../Styles/Goals.css';
import CreateGoalModal from "./CreateGoalModal"; // Import the modal component

const Goals = () => {
    const [showModal, setShowModal] = useState(false);
    const [goals, setGoals] = useState([
        {
            goalImage: '/Images/goalBasket.png',
            title: 'Donate a basket of fruit',
            description: '2 apples, 4 bananas, ...',
            progress: 100,
            enrolled: '32/40',
            rewardPoints: 200,
        },
        {
            goalImage: '/Images/goalBasket.png',
            title: 'Donate a basket of fruit',
            description: '2 apples, 4 bananas, ...',
            progress: 100,
            enrolled: '32/40',
            rewardPoints: 200,
        },
        // Add more goal objects here
    ]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const addGoal = (newGoal) => {
        setGoals([...goals, newGoal]);
    };

    return (
        <div className="goals-container">
            <div className="goals-header">
                <div className="tabs">
                    <button className="tab active">Unfinished Goals <span className="tab-count">10</span></button>
                    <button className="tab">Completed Goals <span className="tab-count">10</span></button>
                </div>
                <button className="create-goal-button" onClick={handleShow}>Create New Goal</button>
            </div>
            {goals.map((goal, index) => (
                <GoalItem key={index} {...goal} />
            ))}
            {/* Modal */}
            <CreateGoalModal show={showModal} handleClose={handleClose} addGoal={addGoal} />
        </div>
    );
};

export default Goals;
