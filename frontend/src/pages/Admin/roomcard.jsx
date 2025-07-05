import React from 'react';

function RoomCard({ room, onDelete, onUpdateClick }) {
    const imageBlob = new Blob([new Uint8Array(room.room_pic.data)], { type: 'image/png' });
    const imageSrc = URL.createObjectURL(imageBlob);

    return (
        <div className="room-card-container">
            <div className="room-pic-container">
                <img src={imageSrc} alt="Room" />
            </div>
            <div className="room-items-container">
                <li>Rent: {room.rent}</li>
                <li>Security Deposit: {room.secu_deposit}</li>
                <li>Address: {room.address}</li>
                <li>Room Type: {room.room_type}</li>
                <li>Bed Type: {room.bed_type}</li>
            </div>
            <div className='room-uploaded-cancel-button'>
                <button onClick={() => onUpdateClick(room)}>Update Room</button>
                <button onClick={() => onDelete(room.id)}>Delete Room</button>
            </div>
        </div>
    );
}

export default RoomCard;
