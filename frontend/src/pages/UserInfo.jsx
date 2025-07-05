import React, { useEffect, useState } from 'react';
import Updateprofile from './updateprofile';
import './userprofile.css';

function UserInfo({ user }) {
    const [userData, setUserData] = useState(user);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (!userData) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setUserData(storedUser);
            }
        }
    }, [userData]);

    function handleUpdate(newUserData) {
        setUserData(newUserData);
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(newUserData));
    }

    if (!userData) {
        return <div className="userinfo-container">No user data available. Please log in or sign up.</div>;
    }

    return (
        <div className="userinfo-container">
            {isEditing ? (
                <Updateprofile
                    user={userData}
                    onUpdate={handleUpdate}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className="userinfo-outer-container">


                    <div className="userinfo-content">
                        <div className="userinfo-details">
                            <img
                                src={userData.profile_pic || "https://wallpaperaccess.com/full/2562964.jpg"}
                                alt="Profile"
                            />
                            <h1>Profile</h1>
                            <p><strong>Name:</strong> {userData.fullname}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Mobile Number:</strong> {userData.mobileno}</p>
                            <p><strong>Address:</strong> {userData.village}, {userData.district}, {userData.state}</p>
                            <p><strong>Aadhaar ID:</strong> {userData.aadharid}</p>
                        </div>


                    </div>
                    <div className="userdetails-buttons">
                        <button className="action-button" onClick={() => setIsEditing(true)}>Update</button>
                        <button className="action-button" onClick={() => {/* Implement Booking History */ }}>Booking History</button>
                    </div>
                </div>


            )}
        </div>
    );
}

export default UserInfo;
