import React, { useState } from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';

const RootLayout = () => {

    const [events, setEvents] = useState([]); // 🔥 global state

    return (
        <div>
            <Navbar />
            
            <Outlet context={{ events, setEvents }} />
            
            <Footer />
        </div>
    );
};

export default RootLayout;