import React, { useState, useEffect } from 'react';
import Profile from './profile';
import AdminProfile from './Admin/profile';
import './authn.css';
import { useNavigate } from 'react-router-dom';

const AuthSelector = () => {
    const [showAdmin, setShowAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole === 'admin') {
            setShowAdmin(true);
        } else if (userRole === 'user') {
            setShowAdmin(false);
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem('user');
        localStorage.removeItem('userRole');
        setShowAdmin(false);
        navigate('/authent'); // Navigate to login/signup page after logout
    }

    function handleAdminLogin() {
        handleLogout(); // Ensure logout before switching
        localStorage.setItem('userRole', 'admin');
        setShowAdmin(true);
    }

    function handleUserLogin() {
        handleLogout(); // Ensure logout before switching
        localStorage.setItem('userRole', 'user');
        setShowAdmin(false);
    }

    return (
        <div className="auth-selector">
            <div className="auth-content">
                {showAdmin ? (
                    <AdminProfile /> // Show Admin Profile if logged in as admin
                ) : (
                    <Profile /> // Show User Profile if logged in as user
                )}
            </div>
            <div className="button-container">
                {showAdmin ? (
                    <button onClick={handleUserLogin}>Switch to User</button>
                ) : (
                    <button onClick={handleAdminLogin}>Switch to Admin</button>
                )}
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default AuthSelector;
