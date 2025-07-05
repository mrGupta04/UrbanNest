import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RoomCard from './roomcard'; // Assuming you have a RoomCard component
import './uploaded.css';

function Uploaded() {
    const location = useLocation();
    const { admin_id } = location.state || {};

    const [rooms, setRooms] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {
        if (selectedCategory) {
            fetchRooms(selectedCategory);
        }
    }, [selectedCategory]);

    function fetchRooms(category) {
        if (!admin_id) {
            console.error('admin_id is not available');
            return;
        }

        setLoading(true);
        fetch(`http://localhost:3001/api/rooms?admin_id=${admin_id}&room_type=${category}`)
            .then(response => response.json())
            .then(data => {
                setRooms(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
                setLoading(false);
            });
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    function handleDeleteRoom(id) {
        fetch(`http://localhost:3001/api/rooms-delete/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    setRooms(prevRooms => prevRooms.filter(room => room.id !== id));
                } else {
                    console.error('Error deleting room');
                }
            })
            .catch(error => {
                console.error('Error deleting room:', error);
                fetchRooms(selectedCategory);
            });
    }

    function handleUpdateClick(room) {
        setSelectedRoom(room);
    }

    function handleUpdateRoom(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch(`http://localhost:3001/api/rooms-update/${selectedRoom.id}`, {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setRooms(prevRooms => prevRooms.map(room => room.id === data.id ? data : room));
                setSelectedRoom(null); 
            })
            .catch(error => console.error('Error updating room:', error));
    }

    return (
        <div className="outer-room-uploaded-container">
            <div className="room-category-list">
                <button onClick={() => handleCategoryClick('rooms')} className={selectedCategory === 'rooms' ? 'active' : ''}>Rooms</button>
                <button onClick={() => handleCategoryClick('flat')} className={selectedCategory === 'flat' ? 'active' : ''}>Flat</button>
                <button onClick={() => handleCategoryClick('pg')} className={selectedCategory === 'pg' ? 'active' : ''}>PG</button>
                <button onClick={() => handleCategoryClick('boy hostel')} className={selectedCategory === 'boy hostel' ? 'active' : ''}>Boys Hostel</button>
                <button onClick={() => handleCategoryClick('girls hostel')} className={selectedCategory === 'girls hostel' ? 'active' : ''}>Girls Hostel</button>
            </div>

            <div className="rooms-container">
                {loading ? (
                    <p>Loading rooms...</p>
                ) : (
                    rooms.length > 0 ? (
                        rooms.map(room => (
                            <RoomCard key={room.id} room={room} onDelete={handleDeleteRoom} onUpdateClick={handleUpdateClick} />
                        ))
                    ) : (
                        <p>No rooms available for this category.</p>
                    )
                )}
            </div>

            {selectedRoom && (
                <div className="update-room-form">
                    <h2>Update Room</h2>
                    <form onSubmit={handleUpdateRoom}>
                        <label>
                            Rent:
                            <input type="number" name="rent" defaultValue={selectedRoom.rent} required />
                        </label>
                        <label>
                            Security Deposit:
                            <input type="number" name="secu_deposit" defaultValue={selectedRoom.secu_deposit} required />
                        </label>
                        <label>
                            City:
                            <input type="text" name="city" defaultValue={selectedRoom.city} required />
                        </label>
                        <label>
                            District:
                            <input type="text" name="district" defaultValue={selectedRoom.district} required />
                        </label>
                        <label htmlFor="room_type"><b>Room Type</b></label>
                        <select
                            name="room_type"
                            defaultValue={selectedRoom.room_type}
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
                            defaultValue={selectedRoom.bed_type}
                            required
                        >
                            <option value="single">Single Bed</option>
                            <option value="double">Double Bed</option>
                            <option value="triple">Triple Bed</option>
                        </select>
                        <label>
                            Image:
                            <input type="file" name="img" />
                        </label>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setSelectedRoom(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Uploaded;
