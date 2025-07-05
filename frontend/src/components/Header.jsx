import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='headbox'>
            <div className="logo-container">
                <img src="/images/logo3.png" alt="Logo" />
                {/* Optional: Add text next to the logo */}
            </div>

            <nav>

                <ul id='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/Admin/profile">Upload Room</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
