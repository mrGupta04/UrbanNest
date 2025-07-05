import React, { useState } from 'react';
import './signup.css';

function Signup({ onSignup }) {
    const [formData, setFormData] = useState({
        admin_id: "",
        password: "",
        email: "",
        mobile_no: "",
        city: "",
        fullname: "",
        profile_pic: ""
    });
    const [profilePicPreview, setProfilePicPreview] = useState(null);

    // Handle input changes
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
                setProfilePicPreview(reader.result);
                setFormData(prevValue => ({
                    ...prevValue,
                    profile_pic: reader.result // Save base64 string
                }));
            };
            reader.readAsDataURL(file); // Convert image to base64
        }
    }

    // Handle form cancellation
    function handleCancel() {
        setFormData({
            admin_id: "",
            password: "",
            email: "",
            mobile_no: "",
            city: "",
            fullname: "",
            profile_pic: ""
        });
        setProfilePicPreview(null); // Clear preview
    }

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/adminsignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Admin registered successfully', result);
                onSignup(result); // Callback function for signup
            } else {
                const error = await response.json();
                console.error('Failed to register admin', error);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    }

    return (
        <div className='signupform'>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <div className="admin-profile-pic">
                        {profilePicPreview ? (
                            <img src={profilePicPreview} alt="Profile Preview" />
                        ) : (
                            <p>No profile picture selected</p>
                        )}
                    </div>
                    <p>Please fill in this form to create an account as Admin.</p>
                    <hr />

                    <label htmlFor="fullname"><b>Full Name</b></label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="admin_id"><b>Admin ID</b></label>
                    <input
                        type="text"
                        placeholder="Enter Admin ID"
                        name="admin_id"
                        value={formData.admin_id}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="mobile_no"><b>Mobile No</b></label>
                    <input
                        type="text"
                        placeholder="Mobile No"
                        name="mobile_no"
                        value={formData.mobile_no}
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

                    <label htmlFor="city"><b>City</b></label>
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
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

                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
