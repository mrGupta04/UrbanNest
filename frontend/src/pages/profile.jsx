import React, { useState, useEffect } from 'react';
import Signup from './signup'; // Ensure this component exists
import Login from './login'; // Ensure this component exists
import UserInfo from './UserInfo'; // New component to display user data

function Profile() {
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(null); // State to store user data

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    function handleSignup() {
        setShowSignup(true);
    }

    function handleLogin() {
        setShowSignup(false);
    }

    function handleUserData(userData) {
        setUser(userData); // Set user data when login or signup is successful
        localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
    }

    function handleLogout() {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <div className="profile-container">
            {user ? (
                <div>
                    <UserInfo user={user} />
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            ) : (
                <div className="loginsignupform">
                    {showSignup ? (
                        <div className="signupformint">
                            <Signup onSignup={handleUserData} />
                            <button onClick={handleLogin} className="loginsignbtn">Login</button>
                        </div>
                    ) : (
                        <div className="loginformint">
                            <Login onLogin={handleUserData} />
                            <button onClick={handleSignup} className="loginsignbtn">Signup</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Profile;