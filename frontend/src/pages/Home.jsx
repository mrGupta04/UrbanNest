import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Card from './homeroomcard'; // Ensure the path is correct
import districtsData from './roomlist'; // Ensure the path is correct
import './Home.css';
import Slideshow from './slideshow';
import Feedback from './feedback';
function Home() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [searchQuery, setSearchQuery] = useState(""); // State for search input

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle form submission if needed, for now just log search query
        console.log("Search query: ", searchQuery);
    };

    return (
        <div className='mainhome'>
            {/* Search Bar */}

            <div className="upper_section" >
                {/* Room categories */}
                <p id="subheading_text">Easily Find Room and Flat anytime ,anywhere</p>

                <div className="roompgflat">
                    
                    <div>
                        <img
                            src="https://th.bing.com/th/id/R.688ca730088aa3ccb321e7ed4a8bff31?rik=kMukeZ6ooSZBLg&riu=http%3a%2f%2fhome
                        designlover.com%2fwp-content%2fuploads%2f2015%2f08%2f5-tribeca-bachelors.jpg&ehk=o7eKkQqMmdgk
                        tyYWoeJChyof%2fXdY2utZW0B%2fUbAVPvE%3d&risl=&pid=ImgRaw&r=0"
                            alt="Room"
                        />
                        <button className="button-div-btn" onClick={() => navigate('/room')}>Room</button>
                    </div>
                    <div>
                        <img
                            src="https://th.bing.com/th/id/OIP.ugfMyb-xmfI8BQf9VWzq0gHaEW?rs=1&pid=ImgDetMain"
                            alt="Flat"
                        />
                        <button className="button-div-btn" onClick={() => navigate('/flat')}>Flat</button>
                    </div>
                    <div>
                        <img
                            src="https://th.bing.com/th/id/OIP.TC26AE8L1Md0bqQfXBVfMgHaEK?rs=1&pid=ImgDetMain"
                            alt="PG"
                        />
                        <button className="button-div-btn" onClick={() => navigate('/pg')}>PG</button>
                    </div>
                    <div>
                        <img
                            src="https://cache.marriott.com/marriottassets/marriott/LASJW/lasjw-suite-0084-hor-clsc.jpg?interpolation=progressive-bilinear&"
                            alt="Boys Hostel"
                        />
                        <button className="button-div-btn" onClick={() => navigate('/boy')}>Boys Hostel</button>
                    </div>
                    <div>
                        <img
                            src="https://th.bing.com/th/id/OIP.sAQdELqyfkCqpVXOjj2psQHaFj?w=1000&h=750&rs=1&pid=ImgDetMain"
                            alt="Girls Hostel"
                        />
                        <button className="button-div-btn" onClick={() => navigate('/girls')}>Girls Hostel</button>
                    </div>
                </div>
            </div>

            {/* Room list */}
            <div className='roomlist'>
                <h2 id='roomheading'>
                    Find a room in popular cities
                </h2>
                <div className='roompic'>
                    {districtsData.map((room, index) => (
                        <Card key={index} image={room.imageUrl} city={room.name} />
                    ))}
                </div>
            </div>


            {/* Slideshow */}
           
            <div className="feedback-home">
                <Feedback />
            </div>

        </div>
    );
}

export default Home;
