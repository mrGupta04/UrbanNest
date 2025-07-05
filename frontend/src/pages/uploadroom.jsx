import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomForm from './Admin/room';

const UploadRoom = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false); // Track admin login state
    const [successMessage, setSuccessMessage] = useState(''); // Success message state
    const formRef = useRef(null); // Create a ref for the RoomForm

    useEffect(() => {
        const checkAdminLogin = () => {
            const userRole = localStorage.getItem('userRole');

            if (userRole === 'admin') {
                setIsAdmin(true); // Admin is logged in
            } else {
                setIsAdmin(false);
                navigate('/authent'); // Redirect to login/signup page if not admin
            }
        };

        checkAdminLogin(); // Check immediately when the component mounts
    }, [navigate]);

    const handleFormSubmit = (roomData) => {
        const userRole = localStorage.getItem('userRole');

        if (userRole !== 'admin') {
            alert('You must be an admin to submit room data.');
            navigate('/authent'); // Redirect to login/signup page
        } else {
            console.log('Room data submitted:', roomData);
            setSuccessMessage('Room uploaded successfully!'); 
            
            
        }
    };

    return (
        <div>
            <h1>Room Upload</h1>
            {isAdmin ? (
                <>
                    <RoomForm ref={formRef} onSubmit={handleFormSubmit} />
                    {successMessage && <p>{successMessage}</p>} {/* Display success message */}
                </>
            ) : (
                <p>Redirecting to login...</p> // Shows this briefly before redirect
            )}
        </div>
    );
};

export default UploadRoom;
