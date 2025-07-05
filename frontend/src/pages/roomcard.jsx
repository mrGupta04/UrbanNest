import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookingSummary from './BookingSummary';
import './roomcard.css'; 

function RoomCard({ room }) {
  const [showSummary, setShowSummary] = useState(false);

  const bufferToBase64 = (buffer) => {
    if (buffer && buffer.data) {
      const bytes = new Uint8Array(buffer.data);
      const binary = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
      return 'data:image/jpeg;base64,' + window.btoa(binary);
    }
    return '';
  };

  // Check if room exists and has room_pic, else provide a fallback image
  const imageSrc = room?.room_pic
    ? typeof room.room_pic === 'string'
      ? room.room_pic // If room_pic is a string (e.g., URL)
      : bufferToBase64(room.room_pic) // If room_pic is a buffer
    : 'defaultImage.jpg'; // Fallback image in case room_pic is not defined

  const handleBookClick = () => {
    setShowSummary(true); // Show Booking Summary when the "Book" button is clicked
  };

  const handleCloseSummary = () => {
    setShowSummary(false); // Close Booking Summary when the close button is clicked
  };

  if (!room) {
    return <p>Loading room details...</p>; // Handle case when room is undefined
  }

  return (
    <div className="roomcard">
      <img src={imageSrc} alt="Room" />
      <div className="room-details">
        <p><strong>Rent:</strong> ${room.rent}</p>
        <p><strong>Contact:</strong> {room.mobile_no}</p>
        <p><strong>City:</strong> {room.city}</p>
        <p><strong>District:</strong> {room.district}</p>
        <p><strong>Security Deposit:</strong> ${room.secu_deposit}</p>
      </div>
      <div className="room_booking_button">
        <button onClick={handleBookClick}>Book</button>
      </div>

      {showSummary && (
        <BookingSummary room={room} onClose={handleCloseSummary} />
      )}
    </div>
  );
}

RoomCard.propTypes = {
  room: PropTypes.shape({
    room_pic: PropTypes.oneOfType([
      PropTypes.string, // For URLs or base64 strings
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number), // Buffer case
      }),
    ]),
    rent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    mobile_no: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    secu_deposit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default RoomCard;
