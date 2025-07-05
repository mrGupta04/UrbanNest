import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/profile';
import Contact from './pages/contact';
import Room from './pages/room';
import Flat from './pages/flat';
import PG from './pages/pg';
import Boy from './pages/boy';
import Girl from './pages/girls';
import Admin from './pages/admin';
import AuthSelector from './pages/authent';
import Uploaded from './pages/Admin/uploadedroom';
import AdminProfile from './pages/Admin/profile';
import UploadRoom from './pages/uploadroom';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/room" element={<Room />} />
                        <Route path="/flat" element={<Flat />} />
                        <Route path="/pg" element={<PG />} />
                        <Route path="/boy" element={<Boy />} />
                        <Route path="/girls" element={<Girl />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/user" element={<Room />} />
                        <Route path="/uploadedroom" element={<Uploaded />} />
                        <Route path="/authent" element={<AuthSelector />} />
                        <Route path="/uploadroom" element={<UploadRoom />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/Admin/profile" element={<AdminProfile />} />


                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
