import React, { useState, useEffect } from 'react';
import RoomCard from './roomcard';
import './room.css';

function Room() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [roomType, setRoomType] = useState('');
    const [availRooms, setAvailRooms] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false); // Tracks if the form was submitted

    const [city, setCity] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const subCategories = {
        patna: ["kankerbagh", "boring road", "bazar samiti"],
        muzaffarpur: ["amgola road", "motijhel"],
        darbhanga: ["Location C", "Location D"],
        sitamarhi: ["Location E", "Location F"],
        siwan: ["Location G", "Location H"],
        chapra: ["Location I", "Location J"],
        champaran: ["Location K", "Location L"],
        gaya: ["Location M", "Location N"],
        motihari: ["Location O", "Location P"]
    };

    function handleRoomClick(e) {
        const selectedRoomType = e.target.value;
        setRoomType(selectedRoomType);
        setShowDropdown(true);
        setDropdownVisible(true);
    }

    // Function to handle form data submission and room fetching
    async function fetchRoomData() {
        try {
            const response = await fetch(`http://localhost:3001/availroom?city=${city}&district=${subCategory}&bed_type=${roomType}&startDate=${startDate}&endDate=${endDate}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const availroom = await response.json();
                setAvailRooms(availroom);
                setDropdownVisible(false); // Hide the dropdown only after a successful data fetch
                setFormSubmitted(true); // Mark the form as submitted
            } else {
                console.error("Failed to fetch data.");
            }
        } catch (err) {
            console.error("Error fetching data", err);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Validate form input (startDate, endDate)
        if (!startDate || !endDate) {
            alert('Please enter both start and end dates.');
            return;
        }

        // Check if start date is earlier than end date
        if (new Date(startDate) > new Date(endDate)) {
            alert('Start date cannot be later than end date.');
            return;
        }

        // If all inputs are valid, fetch room data and hide the dropdown
        if (roomType && city && subCategory && startDate && endDate) {
            fetchRoomData(); // Call to fetch data based on the current form inputs
        }
    }

    // Function to handle dropdown cancel action
    function handleCancel() {
        setDropdownVisible(false); // Hide the dropdown when cancelled
    }

    // New function to handle modify action (renders dropdown again)
    function handleModify() {
        setDropdownVisible(true); // Show the dropdown again for modification
        setFormSubmitted(false);  // Reset form submission flag
    }

    // Room type section to choose room type
    function RoomSection() {
        return (
            <div className="outerroomdiv">
                <p id="roomcont">All types of rooms are available</p>
                <div className="roomcategory">
                    <div>
                        <img
                            src="https://th.bing.com/th/id/R.7d6d3f2949e843e94c8b222ccc8a78b8?rik=ClTXhLLbUODrDQ&riu=http%3a%2f%2fhotelhennessis.com%2fwp-content%2fuploads%2f2015%2f12%2fStandard-Single-Room-Hotel-Hennessis-1.jpg&ehk=k1yvbWgeqnsv81LBUNwz3u6KCemfUi9TBjeBC1dK%2fIE%3d&risl=&pid=ImgRaw&r=0"
                            alt="Single Bed"
                        />
                        <button
                            className={`roomcatogrybutton ${roomType === 'single' ? 'active' : ''}`}
                            onClick={handleRoomClick}
                            value="single"
                        >
                            Single Bed
                        </button>
                    </div>
                    <div>
                        <img
                            src="https://th.bing.com/th/id/OIP.XVDq4HXQidsWrQ3GoCn5hwHaFj?w=1040&h=780&rs=1&pid=ImgDetMain"
                            alt="Double Bed"
                        />
                        <button
                            className={`roomcatogrybutton ${roomType === 'double' ? 'active' : ''}`}
                            onClick={handleRoomClick}
                            value="double"
                        >
                            Double Bed
                        </button>
                    </div>
                    <div>
                        <img
                            src="https://www.northfaceinn.com/images/gallery/rooms_rates/std_triple_bed_room/1.jpg"
                            alt="Triple"
                        />
                        <button
                            className={`roomcatogrybutton ${roomType === 'triple' ? 'active' : ''}`}
                            onClick={handleRoomClick}
                            value="triple"
                        >
                            Triple Bed
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Dropdown component to collect city, area, and date details
    function Dropdown() {
        return (
            <div className="wholedropdown-room">
                <div className="dropdown-row-room">
                    <div className="dropdown-section-room">
                        <label htmlFor="city"><strong>Choose city:</strong></label>
                        <select
                            name="city"
                            id="city"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                                setSubCategory(''); // Reset subCategory when city changes
                            }}
                        >
                            <option value=""><strong>Select a city</strong></option>
                            {Object.keys(subCategories).map((cityOption) => (
                                <option key={cityOption} value={cityOption}>
                                    {cityOption.charAt(0).toUpperCase() + cityOption.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="dropdown-section-room">
                        <label htmlFor="subCategory"><strong>Choose area:</strong></label>
                        <select
                            name="subCategory"
                            id="subCategory"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                            disabled={!city}
                        >
                            <option value=""><strong>Select an area</strong></option>
                            {subCategories[city]?.map((area) => (
                                <option key={area} value={area}>
                                    {area.charAt(0).toUpperCase() + area.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="dropdown-section-room">
                        <label htmlFor="startDate"><strong>Start Date:</strong></label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div className="dropdown-section-room">
                        <label htmlFor="endDate"><strong>End Date:</strong></label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <div className="button-row-room">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

    // Display the submitted form data with a modify button
    function DisplayFormData() {
        return (
            <div className="form-data-display">
                <p><strong>Selected Room Type:</strong> {roomType}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Area:</strong> {subCategory}</p>
                <p><strong>Start Date:</strong> {startDate}</p>
                <p><strong>End Date:</strong> {endDate}</p>
                <button onClick={handleModify} className="modify-button">Modify</button>
            </div>
        );
    }

    return (
        <div className="mainroom_data_container">
            <RoomSection />
            {showDropdown && dropdownVisible && <Dropdown />}
            {/* Display form data if submitted */}
            {formSubmitted && !dropdownVisible && <DisplayFormData />}
            {/* Display fetched rooms */}
            <div className="roomcardcontainer">
                {availRooms.length > 0 ? (
                    availRooms.map((room, index) => (
                        <RoomCard key={index} room={room} />
                    ))
                ) : (
                    <p>No rooms available or please provide valid inputs</p>
                )}
            </div>
        </div>
    );
}

export default Room;
