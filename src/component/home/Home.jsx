import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Friends from '../friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json') 
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg text-green-950"></span>
            </div>
        );
    }

    return (
        <div className='bg-base-200 min-h-screen'>
            
            <div className='max-w-7xl mx-auto px-4 py-10'>
                <h2 className="text-3xl font-bold mb-8 text-green-950">Your Friends</h2>
                <Friends friends={friends} />
            </div>
        </div>
    );
};

export default Home;