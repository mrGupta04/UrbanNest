import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Updateadminprofile from './update';
import RoomForm from './room';
import './admin.css';

function AdminInfo({ admin }) {
    const [adminData, setAdminData] = useState(admin);
    const [isEditing, setIsEditing] = useState(false);
    const [showRoomForm, setShowRoomForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!adminData) {
            const storedAdmin = JSON.parse(localStorage.getItem('admin')); // Use 'admin' key
            if (storedAdmin) {
                setAdminData(storedAdmin);
            }
        }
    }, [adminData]);

    function handleUpdate(newAdminData) {
        setAdminData(newAdminData);
        setIsEditing(false);
        localStorage.setItem('admin', JSON.stringify(newAdminData)); // Save updated admin data
    }

    function handleFormClose() {
        setShowRoomForm(false);
    }

    if (!adminData) {
        return <div className="userinfo-container">No admin data available. Please log in or sign up.</div>;
    }

    return (
        <div className="userinfo-container">
            {isEditing ? (
                <Updateadminprofile
                    admin={adminData}
                    onUpdate={handleUpdate}
                    onCancel={() => setIsEditing(false)}
                />
            ) : showRoomForm ? (
                <RoomForm admin_id={adminData.admin_id} onFormClose={handleFormClose} /> 
            ) : (
                <>
                    <h1>Admin Profile</h1>
                    <div className="userinfo-details">
                        <img src={adminData.profile_pic || "https://wallpaperaccess.com/full/2562964.jpg"} alt="Profile" />
                        <p><strong>Name:</strong> {adminData.fullname}</p>
                        <p><strong>Email:</strong> {adminData.email}</p>
                        <p><strong>Mobile Number:</strong> {adminData.mobile_no}</p>
                        <p><strong>City:</strong> {adminData.city}</p>
                        <button onClick={() => setIsEditing(true)}>Update Profile</button>
                        <button onClick={() => setShowRoomForm(true)}>Upload Room</button>
                        <button onClick={() => {
                            navigate('/uploadedroom', { state: { admin_id: adminData.admin_id } });
                        }}>Uploaded Room</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default AdminInfo;
