import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">Welcome to Urban Nest</h1>
            <p className="about-subheading">Your ultimate destination for finding your perfect space</p>
            <div className="about-content">
                <div className="about-section">
                    <h2 className="section-heading">What We Offer</h2>
                    <p className="section-text">
                        At RoomFinder, we understand that finding the right place to live can be challenging. That's why we offer a comprehensive platform to help you find Flats, PGs (Paying Guests), Rooms, Girls' Hostels, and Boys' Hostels with ease.
                    </p>
                </div>
                <div className="about-section">
                    <h2 className="section-heading">Why Choose Us?</h2>
                    <p className="section-text">
                        <ul>
                            <li>Extensive Listings: Browse through a wide range of properties to find what suits you best.</li>
                            <li>Easy Search: Use our user-friendly interface to filter and search for your ideal living space.</li>
                            <li>Verified Listings: We ensure that all our listings are verified to give you peace of mind.</li>
                            <li>Support: Our dedicated support team is here to assist you throughout your search process.</li>
                        </ul>
                    </p>
                </div>
                <div className="about-section">
                    <h2 className="section-heading">Get in Touch</h2>
                    <p className="section-text">
                        Have questions or need assistance? <br />
                        Feel free to <a href="/contact" className="contact-link">Contact Us</a> and we’ll be happy to help!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
