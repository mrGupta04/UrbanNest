
import React, { useState, useEffect } from 'react';
import './slideshow.css'; // Ensure your CSS file is imported

const images = [
    {
        url: 'https://selvamtech.edu.in/wp-content/uploads/2014/03/BoysHostel-1024x587.jpg',
        caption: 'Best hostel Room in City Center',
    },
    {
        url: 'https://dgu.ac/images/pictures/hostel/budding_leaders_residency/blr03.jpg',
        caption: 'Spacious Flat with Modern Amenities',
    },
    {
        url:  'https://qph.fs.quoracdn.net/main-qimg-98a658050aabf3942335eb25255e29fb',
        caption: 'Cozy PG Near Public Transport',
    },
    // Add more image URLs and captions as needed
];

const Slideshow = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return (
        <div className="slideshow-container">
            <img src={images[currentImage].url} alt="Slideshow" className="slideshow-image" />
            <div className="caption">{images[currentImage].caption}</div>
        </div>
    );
};

export default Slideshow;
