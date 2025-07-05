import React, { useState } from 'react';
import './signup.css';

function Login({ onLogin }) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    function handleCancel() {
        setFormData({
            email: "",
            password: ""
        });
        setMessage(""); // Clear any existing message
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json(); // Fetch user data
                console.log('Login successful', result);
                setMessage('Login successful!');
                onLogin(result); // Pass user data to Profile component
            } else {
                const error = await response.json();
                console.error('Failed to login', error);
                setMessage('Invalid email or password');
            }
        } catch (err) {
            console.error('Error:', err);
            setMessage('An error occurred');
        }
    }

    return (
        <div className='signupform'>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Login as User</h1>
                    <p>Please enter your email and password to login as User.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
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

                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="signupbtn">Login</button>
                    </div>

                    {message && <div className="message">{message}</div>} {/* Display message */}
                </div>
            </form>
        </div>
    );
}

export default Login;
