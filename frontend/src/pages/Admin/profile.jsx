import React, { useState, useEffect } from 'react';
import Signup from './signup';
import Login from './login';
import Admininfo from './admininfo';

function AdminProfile() {
    const [showSignup, setShowSignup] = useState(false);
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const storedAdmin = localStorage.getItem('admin'); // Use 'admin' key
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
    }, []);

    function handleSignup() {
        setShowSignup(true);
    }

    function handleLogin() {
        setShowSignup(false);
    }

    function handleAdminData(adminData) {
        setAdmin(adminData); // Set admin data when login or signup is successful
        localStorage.setItem('admin', JSON.stringify(adminData)); // Save admin data to localStorage
    }

    function handleLogout() {
        setAdmin(null);
        localStorage.removeItem('adminRole');
        localStorage.removeItem('admin'); // Remove admin data from localStorage
    }

    return (
        <div className="profile-container">
            {admin ? (
                <div>
                    <Admininfo admin={admin} onAdminUpdate={handleAdminData} />
                    <button onClick={handleLogout} className='logout-button'>Logout</button>
                </div>
            ) : (
                <div className="loginsignupform">
                    {showSignup ? (
                        <div className="signupformint">
                            <Signup onSignup={handleAdminData} />
                            <button onClick={handleLogin} className="loginsignbtn">Login</button>
                        </div>
                    ) : (
                        <div className="loginformint">
                            <Login onLogin={handleAdminData} />
                            <button onClick={handleSignup} className="loginsignbtn">Signup</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default AdminProfile;
