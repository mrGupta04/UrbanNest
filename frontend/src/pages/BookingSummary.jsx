import React from 'react';
import PropTypes from 'prop-types';
import './BookingSummary.css';

function BookingSummary({ room, onClose }) {
  const rent = parseFloat(room.rent) || 0;
  const secuDeposit = parseFloat(room.secu_deposit) || 0;
  const totalPayment = rent + secuDeposit;

  const data = {
    booking_id: room.id,
    totalPayment: totalPayment,
  };

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:3001/payment", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Payment successful:', result);
      alert('Payment successful!'); // Notify user of success
    } catch (err) {
      console.error('Failed to submit payment:', err);
      alert('Payment failed. Please try again later.');
    }
  }

  return (
    <div className="booking-summary-overlay">
      <div className="booking-summary-card">
        <div className="summary-content-section">
          <h2>Booking Summary</h2>
          <div className="summary-room-details">
            <p><strong>City:</strong> {room.city}</p>
            <p><strong>District:</strong> {room.district}</p>
            <p><strong>Rent:</strong> ${rent}</p>
            <p><strong>Security Deposit:</strong> ${secuDeposit}</p>
            <p><strong>Total Payment:</strong> ${totalPayment}</p>
          </div>
          <div className="summary-actions">
            <button className="summary-close-btn" onClick={onClose}>Close</button>
            <button className="summary-pay-btn" onClick={handleSubmit}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

BookingSummary.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    secu_deposit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookingSummary;
