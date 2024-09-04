import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/SelectionPage.css';

const SelectionPage = () => {
    const navigate = useNavigate();

    const handleOrganizationClick = () => {
        navigate('/login'); // Navigate to the organization page
    };

    return (
        <div className='SelectionContainer'>
            <div className="selection-page">
                <img src="/Images/logo.png" alt="main-logo" className="logo" />
                <p className="subtitle">
                    Are you representing yourself as an individual or an organization?
                </p>
                <div className="button-group">
                    <button
                        className="button organization"
                        onClick={handleOrganizationClick}
                    >
                        Organization
                    </button>
                    <button
                        className="button individual"
                    >
                        Individual
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectionPage;
