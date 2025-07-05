import React, { useState } from 'react';
import './signup.css';

function Signup({ onSignup }) {
    const [formData, setFormData] = useState({
        fullname: "",
        mobileno: "",
        email: "",
        password: "",
        village: "",
        state: "",
        district: "",
        aadharid: "",
        pswRepeat: "",
        profile_pic: "", // Store as base64 string
        dob: "" // Date of Birth
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
            reader.readAsDataURL(file); // Convert image to base64 for preview
        }
    }

    // Handle form cancellation
    function handleCancel() {
        setFormData({
            fullname: "",
            mobileno: "",
            email: "",
            password: "",
            village: "",
            state: "",
            district: "",
            aadharid: "",
            pswRepeat: "",
            profile_pic: "",
            dob: ""
        });
        setProfilePicPreview(null); // Clear previewAA
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (formData.password !== formData.pswRepeat) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User registered successfully', result);
                onSignup(result);
            } else {
                const error = await response.json();
                console.error('Failed to register user', error);
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
                    <div className="profile-pic-preview">
                        {profilePicPreview ? (
                            <img src={profilePicPreview} alt="Profile Preview" />
                        ) : (
                            <p>No profile picture selected</p>
                        )}
                    </div>
                    <p>Please fill in this form to create an account as a user.</p>
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

                    <label htmlFor="aadharid"><b>Aadhar ID</b></label>
                    <input
                        type="text"
                        placeholder="Aadhar ID"
                        name="aadharid"
                        value={formData.aadharid}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="dob"><b>Date of Birth</b></label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
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

                    <label htmlFor="pswRepeat"><b>Repeat Password</b></label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="pswRepeat"
                        value={formData.pswRepeat}
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
