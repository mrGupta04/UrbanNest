import React, { useState, useEffect } from 'react';
import './updateprofile.css';

function Updateprofile({ user, onUpdate, onCancel }) {
    const [formData, setFormData] = useState({
        fullname: "",
        mobileno: "",
        email: "",
        village: "",
        state: "",
        district: "",
        profile_pic: ""
    });
    const [profilePicPreview, setProfilePicPreview] = useState(null); // For profile picture preview

    useEffect(() => {
        if (user) {
            setFormData({
                fullname: user.fullname,
                mobileno: user.mobileno,
                email: user.email,
                village: user.village,
                state: user.state,
                district: user.district,
                profile_pic: user.profile_pic
            });
            setProfilePicPreview(user.profile_pic); // Set initial profile picture preview
        }
    }, [user]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    // Handle profile picture file input and preview
    function handleProfilePicChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicPreview(reader.result); // Set the preview for the image
                setFormData(prevValue => ({
                    ...prevValue,
                    profile_pic: reader.result // Store the base64 encoded image
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    aadharid: user.aadharid // Ensure aadharid is included
                })
            });

            if (response.ok) {
                const updatedUser = await response.json();
                console.log('User updated successfully', updatedUser);
                onUpdate(updatedUser);
            } else {
                const error = await response.json();
                console.error('Failed to update user:', error.message);
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    }

    return (
        <div className='updateprofile-form'>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <h1>Update Details</h1>
                    <hr />
                    <div className="profile-pic-preview">
                        {profilePicPreview ? (
                            <img src={profilePicPreview} alt="Profile Preview" />
                        ) : (
                            <p>No profile picture selected</p>
                        )}
                    </div>

                    <label htmlFor="fullname"><b>Full Name</b></label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="mobileno"><b>Mobile No</b></label>
                    <input
                        type="text"
                        placeholder="Mobile No"
                        name="mobileno"
                        value={formData.mobileno}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="village"><b>Village</b></label>
                    <input
                        type="text"
                        placeholder="Village"
                        name="village"
                        value={formData.village}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="district"><b>District</b></label>
                    <input
                        type="text"
                        placeholder="District"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="state"><b>State</b></label>
                    <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="profile_pic"><b>Profile Picture</b></label>
                    <input
                        type="file"
                        accept="image/*"
                        name="profile_pic"
                        onChange={handleProfilePicChange}
                    />

                    <div className="form-actions">
                        <button type="button" className="cancelbtn" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="submitbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Updateprofile;
