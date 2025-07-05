import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>© 2024 My Multi-Page React App</p>
                <p>
                    Created by <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Aditya Gupta</a>
                </p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <img src="https://img.icons8.com/ios-filled/50/000000/youtube.png" alt="YouTube" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
