import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {

        e.preventDefault();
        // Handle login logic here
    };
    const navigate = useNavigate();

    const handleOrganizationClick = () => {
        navigate('/'); // Navigate to the organization page
    };
    return (
        <div className='logoContainer'>
            <div className="login-logo">
                <img src="/Images/Logologin.svg" alt="Logo" />
            </div>
            <div className="login-container">

                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="John@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group remember-me">
                        <input
                            className='checkboxSection'
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label>Remember Me</label>
                    </div>
                    <div className='forgot-pass'>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button" onClick={handleOrganizationClick}>Login</button>
                    <span>or</span>

                    <div className="login-links">

                        <a href="/register">New to Foodation? Create an account</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
