import React from 'react';

const GoalItem = ({ goalImage, title, description, progress, enrolled, rewardPoints }) => (
    <div className="goal-item">
        <div className="goal-image">
            <img src={goalImage} alt={`${title} Basket`} />
        </div>
        <div className="goal-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="goal-progress">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="goal-status">{enrolled} enrolled</p>
            </div>
        </div>
        <div className="goal-reward">
            <img src="/Images/coinicon.svg" alt="goal Basket" />
            <span className="reward-points">+{rewardPoints}</span>
        </div>
    </div>
);

export default GoalItem;
