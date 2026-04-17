import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import Banner from '../banner/Banner';
import { Link } from 'react-router';

const Friends = () => {
    const [friends, setfriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            
            setTimeout(() => {
                setfriends(data);
                setLoading(false);
            }, 2000);
        };
        fetchData();
    }, []);

    return (
        <div className='max-w-6xl mx-auto mt-10 mb-10'>
            {!loading && <Banner friends={friends} />}

            <h2 className='font-bold text-xl mb-10 mt-10'>Your Friends</h2>
            
            {loading ? (
                <div className='flex justify-center p-20'><FadeLoader /></div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>     
                    {friends.map((friend, index) => { 
                        const statusClass = 
                            friend.status === 'on-track' ? 'btn-success' : 
                            friend.status === 'almost due' ? 'btn-warning' : 
                            friend.status === 'overdue' ? 'btn-error' : 'btn-primary';

                        return (
                            <div key={friend.id || index}>
                                <Link to={`/friend/${friend.id}`}> 
                                <div className="card bg-base-100 shadow-sm border border-gray-100">
                                    <figure className="px-10 pt-10">
                                        <img src={friend.picture} alt={friend.name} className="rounded-full w-24 h-24 object-cover" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{friend.name}</h2>
                                        <p className="text-gray-500">{friend.days_since_contact} days since contact</p>
                                        <div className='flex flex-wrap justify-center gap-2 mt-2'>
                                            {friend.tags.map((tag, idx) => (
                                                <span className='badge badge-ghost p-3' key={idx}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className="card-actions mt-4">
                                            <button className={`btn btn-sm rounded-full ${statusClass}`}>{friend.status}</button>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Friends;