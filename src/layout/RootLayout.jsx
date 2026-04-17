import React, { useState } from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';

const RootLayout = () => {

    const [events, setEvents] = useState([]); 

    return (
        <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="grow">
        <Outlet context={{ events, setEvents }} />
    </main>
    <Footer />
</div>
    );
};

export default RootLayout;