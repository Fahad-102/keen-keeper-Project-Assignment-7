import React from 'react';

const Banner = ({ friends = [] }) => {
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === 'on-track').length;
    const needAttentionCount = friends.filter(f => f.status !== 'on-track').length;

    return (
        <div>
            <div>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold pb-5 pt-20'>Friends to keep close in your life</h2>
                    <p className='pb-5 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                    <button className='btn bg-green-950 text-white mb-5'>+ Add a Friend</button>
                </div>
                <div>
                    <div className='grid grid-cols-4 gap-4 max-w-6xl mx-auto pb-10 '>
                  
                        <div className=" card bg-white w-full shadow-sm">
                            <div className="text-center rounded-2xl w-full h-32 card-body ">
                                <h2 className="font-bold text-3xl">{totalFriends}</h2>
                                <p>Total Friends</p>
                            </div>
                        </div>

                        <div className=" card bg-white w-full shadow-sm">
                            <div className="text-center rounded-2xl w-full h-32 card-body">
                                <h2 className="font-bold text-3xl">{onTrackCount}</h2>
                                <p> On Track </p>
                            </div>
                        </div>

  
                        <div className=" card bg-white w-full shadow-sm">
                            <div className="text-center rounded-2xl w-full h-32 card-body">
                                <h2 className="font-bold text-3xl">{needAttentionCount}</h2>
                                <p>Need Attention</p>
                            </div>
                        </div>

                        {/* Interactions This Month */}
                        <div className=" card bg-white w-full shadow-sm">
                            <div className="text-center rounded-2xl w-full h-32 card-body">
                                <h2 className="font-bold text-3xl">{totalFriends}</h2>
                                <p>Interactions This Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;