import React, { useState } from 'react';
import './room.css';

function RoomForm({ admin_id, onFormClose }) {
    const [formData, setFormData] = useState({
        room_pic: null,
        mobile_no: '',
        city: '',
        district: '',
        secu_deposit: '',
        rent: '',
        bed_type: 'single',
        room_type: 'flat'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            room_pic: e.target.files[0] 
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        formDataToSend.append('admin_id', admin_id);

        try {
            const response = await fetch('http://localhost:3001/api/roomupload', {
                method: 'POST',
                body: formDataToSend 
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Room uploaded successfully', result);
                if (onFormClose) onFormClose(); // Close the form after successful submit
            } else {
                const error = await response.json();
                console.error('Failed to upload room', error);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleCancel = () => {
        setFormData({
            room_pic: null,
            mobile_no: '',
            city: '',
            district: '',
            secu_deposit: '',
            rent: '',
            bed_type: 'single',
            room_type: 'flat'
        });
        if (onFormClose) onFormClose();  // Close the form on cancel
    };

    return (
        <div className="room-form-main">
            <strong>Please fill in this form to upload a room</strong>
            <div className="room-internal-container">
                <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
                    <div className="room-form-container">
                        <div className="room-form-pic">
                            {formData.room_pic ? (
                                <img src={URL.createObjectURL(formData.room_pic)} alt="Room" />
                            ) : (
                                <p>No image chosen</p>
                            )}
                        </div>
                        <hr />
                        <label htmlFor="room_pic"><b>Room Picture</b></label>
                        <input
                            type="file"
                            name="room_pic"
                            accept="image/*"
                            onChange={handleFileChange}
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
                        <label htmlFor="city"><b>City</b></label>
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            value={formData.city}
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
                        <label htmlFor="rent"><b>Rent</b></label>
                        <input
                            type="text"
                            placeholder="Enter Rent"
                            name="rent"
                            value={formData.rent}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="secu_deposit"><b>Security Deposit</b></label>
                        <input
                            type="text"
                            placeholder="Enter Security Deposit"
                            name="secu_deposit"
                            value={formData.secu_deposit}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="room_type"><b>Type of Room</b></label>
                        <select
                            name="room_type"
                            value={formData.room_type}
                            onChange={handleChange}
                            required
                        >
                            <option value="flat">Flat</option>
                            <option value="pg">PG</option>
                            <option value="rooms">Rooms</option>
                            <option value="boy hostel">Boys Hostel</option>
                            <option value="girls hostel">Girls Hostel</option>
                        </select>
                        <label htmlFor="bed_type"><b>Type of Bed</b></label>
                        <select
                            name="bed_type"
                            value={formData.bed_type}
                            onChange={handleChange}
                            required
                        >
                            <option value="single">Single Bed</option>
                            <option value="double">Double Bed</option>
                            <option value="triple">Triple Bed</option>
                        </select>
                        <div className="room-fix-container">
                            <button type="button" className="room-cancel-button" onClick={handleCancel}>Cancel</button>
                            <button type="submit" className="room-submit-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RoomForm;
