import React, { useState, useEffect } from "react";
import "./Feedback.css";

const feedbackData = [
  { username: "JohnDoe", feedback: "UrbanNest is a fantastic platform. I found my perfect home!", rating: 5, profilePic: "https://randomuser.me/api/portraits/men/1.jpg" },
  { username: "JaneSmith", feedback: "Easy to navigate and has plenty of options.", rating: 4, profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { username: "SamWilson", feedback: "Highly recommend UrbanNest for finding rentals!", rating: 5, profilePic: "https://randomuser.me/api/portraits/men/3.jpg" },
  { username: "AlexJones", feedback: "Great user experience and awesome customer service.", rating: 4, profilePic: "https://randomuser.me/api/portraits/men/4.jpg" },
  { username: "OliviaBrown", feedback: "Found my apartment within days, smooth process.", rating: 5, profilePic: "https://randomuser.me/api/portraits/women/5.jpg" },
  { username: "LiamDavis", feedback: "Efficient and reliable! Will definitely use again.", rating: 4, profilePic: "https://randomuser.me/api/portraits/men/6.jpg" },
  { username: "SophiaMiller", feedback: "Very useful for finding a flat quickly in my area.", rating: 5, profilePic: "https://randomuser.me/api/portraits/women/7.jpg" },
  { username: "NoahTaylor", feedback: "The filtering options make it easy to find what you need.", rating: 4, profilePic: "https://randomuser.me/api/portraits/men/8.jpg" },
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Feedback = () => {
  const [visibleFeedback, setVisibleFeedback] = useState([]);

  useEffect(() => {
    // Initial shuffle of feedback data
    setVisibleFeedback(shuffleArray(feedbackData).slice(0, 2));

    // Change feedback every 5 seconds
    const intervalId = setInterval(() => {
      setVisibleFeedback(shuffleArray(feedbackData).slice(0, 2));
    }, 3000); // Change feedback every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>&#9733;</span>
    ));
  };

  return (
    <div className="feedback-container">
      <h2>User Feedback for UrbanNest</h2>
      <ul className="feedback-list">
        {visibleFeedback.map((item, index) => (
          <li key={index} className="feedback-item">
            <div className="profile-pic">
              <img src={item.profilePic} alt={item.username} />
            </div>
            <div className="feedback-content">
              <div className="feedback-header">
                <div className="feedback-username">{item.username}</div>
                <div className="feedback-rating">{renderStars(item.rating)}</div>
              </div>
              <div className="feedback-message">{item.feedback}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
