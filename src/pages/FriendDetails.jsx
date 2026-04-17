import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { useOutletContext } from 'react-router';
import { LuPhoneCall, LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { PiBellZ } from "react-icons/pi";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const FriendDetails = () => {

    const allFriends = useLoaderData();
    const { id } = useParams(); 

    const friend = allFriends.find(friend => friend.id === parseInt(id));

    // ✅ context inside component
    const { setEvents } = useOutletContext();

    if (!friend) return <div className="p-20 text-center text-red-500">Friend not found!</div>;

    const handleAddEvent = (type, icon) => {

        const newEvent = {
            id: crypto.randomUUID(),
            type: type,
            name: friend.name,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
            icon: icon
        };

        setEvents((prevEvents) => [newEvent, ...prevEvents]);
    };

    return (
        <div className='max-w-6xl mx-auto m-10 p-5'>
            <div className='bg-base-300 p-6 rounded-3xl'>
                <div className='grid grid-cols-4 grid-rows-auto gap-4'>
                    
                    {/* Profile Card */}
                    <div className="p-8 bg-white shadow-xl rounded-2xl row-span-2">
                        <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full mx-auto object-cover" />
                        <h2 className="font-bold text-center mt-3 text-lg">{friend.name}</h2>
                        <div className="text-center mt-2">
                            <p className="badge badge-success mb-1">{friend.status}</p>
                            <div className="flex flex-wrap justify-center gap-1 mb-2">
                                {friend.tags.map(tag => <span key={tag} className="badge badge-error text-[10px]">{tag}</span>)}
                            </div>
                            <p className="text-[12px] italic mb-3">"{friend.bio}"</p>
                            <p className="text-[11px] font-bold">Preferred: {friend.email}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className='bg-white shadow-sm flex flex-col justify-center items-center rounded-2xl p-4'>
                        <div className='text-3xl text-green-950 font-bold'>{friend.days_since_contact}</div>
                        <div className='text-sm text-gray-500'>Since Contact</div>
                    </div>

                    <div className='bg-white shadow-sm flex flex-col justify-center items-center rounded-2xl p-4'>
                        <div className='text-3xl text-green-950 font-bold'>{friend.goal}</div>
                        <div className='text-sm text-gray-500'>Goal (Days)</div>
                    </div>

                    <div className='bg-white shadow-sm flex flex-col justify-center items-center rounded-2xl p-4'>
                        <div className='text-xl text-green-950 font-bold'>{friend.next_due_date}</div>
                        <div className='text-sm text-gray-500'>Next Due</div>
                    </div>

                    {/* Goal Section */}
                    <div className='bg-white shadow-sm col-span-3 rounded-2xl p-6'>
                        <div className='flex justify-between items-center mb-2'>
                            <span className='text-green-950 text-xl font-bold'>Relationship Goal</span>
                            <button className='btn btn-sm btn-ghost border-gray-200'>Edit</button>
                        </div>
                        <div className='text-[16px]'>Connect Every <span className='font-bold text-green-800'>30 Days</span></div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-row-3 gap-3">
                        <button className="bg-white shadow-sm rounded-xl p-3 flex justify-center items-center font-semibold hover:bg-gray-50">
                            <PiBellZ className="mr-2"/> Snooze
                        </button>

                        <button className="bg-white shadow-sm rounded-xl p-3 flex justify-center items-center font-semibold hover:bg-gray-50">
                            <FiArchive className="mr-2"/> Archive
                        </button>

                        <Link to={"/home"} className="rounded-xl bg-white text-red-600 shadow-sm flex justify-center items-center font-semibold p-3 hover:bg-red-50">
                            <RiDeleteBinLine className="mr-2"/> Delete
                        </Link>
                    </div>

                    {/* Quick Check-In Buttons */}
                    <div className='bg-white col-span-3 rounded-2xl p-6 shadow-sm'>
                        <div className='p-1 font-semibold text-2xl mb-4 text-green-950'>Quick Check-In</div>

                        <div className='grid grid-cols-3 gap-4'>

                            <button className='bg-base-300 flex flex-col justify-center items-center p-5' onClick={() => handleAddEvent('Call', <LuPhoneCall/>)}><LuPhoneCall/>Call</button>

                            <button className='bg-base-300 flex flex-col justify-center items-center p-5' onClick={() => handleAddEvent('Text', <MdOutlineTextsms/>)}><MdOutlineTextsms/>Text</button>

                            <button className='bg-base-300 flex flex-col justify-center items-center p-5' onClick={() => handleAddEvent('Video', <LuVideo />)}>
                                <LuVideo />Video
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;