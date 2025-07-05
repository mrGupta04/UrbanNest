import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Get in Touch</h1>
            <p className="contact-description">
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us through any of the following platforms:
            </p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src="https://img.icons8.com/ios/50/facebook.png" alt="Facebook" />
                    Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src="https://img.icons8.com/ios/50/twitter.png" alt="Twitter" />
                    Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src="https://img.icons8.com/ios/50/linkedin.png" alt="LinkedIn" />
                    LinkedIn
                </a>
                <a href="mailto:contact@yourwebsite.com" className="social-link">
                    <img src="https://img.icons8.com/ios/50/email.png" alt="Email" />
                    Email
                </a>
            </div>
        </div>
    );
}

export default Contact;
