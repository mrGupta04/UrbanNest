import React, { useState } from 'react';
import Profile from './Admin/profile';

function Admin() {
    const [profile, setProfile] = useState(true);
    const [admincontainer,setadmincontainer] = useState(false);

    function adminContainer() {
        return (
            <div className="main-admin-detail-container">
                <div className="sub-admin-container">
                    <button>Upload Room</button>
                    <button>Uploaded Flat</button>
                    <button>Uploaded PG</button>
                    <button>Uploaded Boys Hostel</button>
                    <button>Uploaded Girls Hostel</button>

                </div>
            </div>
        );
    }

    return (
        <div> {profile && <Profile />}
            {adminContainer}

            
        </div>
    );
}

export default Admin;
