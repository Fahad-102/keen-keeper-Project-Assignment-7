import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";

const Banner = ({ friends = [] }) => {
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === 'on-track').length;
    const needAttentionCount = friends.filter(f => f.status !== 'on-track').length;

    return (
        <section className='bg-base-100'>
            <div className='text-center px-4'>
                <h1 className='text-3xl md:text-5xl font-bold pb-4 pt-16 md:pt-20'>
                    Friends to keep close in your life
                </h1>
                <p className='pb-6 text-gray-600 max-w-2xl mx-auto'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                    relationships that matter most.
                </p>
                <button className='btn bg-green-950 hover:bg-green-900 text-white mb-10 px-6'>
                    <IoMdAddCircleOutline className="text-xl" /> Add a Friend
                </button>
            </div>

            <div className='max-w-7xl mx-auto px-4 pb-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    
                    {/* Total Friends */}
                    <div className="card bg-white shadow-md border border-gray-100">
                        <div className="card-body items-center text-center py-8">
                            <h2 className="font-bold text-4xl text-green-950">{totalFriends}</h2>
                            <p className="text-gray-500 font-medium">Total Friends</p>
                        </div>
                    </div>

                    {/* On Track */}
                    <div className="card bg-white shadow-md border border-gray-100">
                        <div className="card-body items-center text-center py-8">
                            <h2 className="font-bold text-4xl text-green-600">{onTrackCount}</h2>
                            <p className="text-gray-500 font-medium">On Track</p>
                        </div>
                    </div>

                    {/* Need Attention */}
                    <div className="card bg-white shadow-md border border-gray-100">
                        <div className="card-body items-center text-center py-8">
                            <h2 className="font-bold text-4xl text-orange-500">{needAttentionCount}</h2>
                            <p className="text-gray-500 font-medium">Need Attention</p>
                        </div>
                    </div>

                    {/* Interactions This Month */}
                    <div className="card bg-white shadow-md border border-gray-100">
                        <div className="card-body items-center text-center py-8">
                            <h2 className="font-bold text-4xl text-blue-600">0</h2>
                            <p className="text-gray-500 font-medium">Interactions</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;