import React, { useState } from 'react';
import { useOutletContext } from 'react-router';

const TimeLine = () => {

    const { events } = useOutletContext();

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const filteredEvents = events.filter((event) => {

        const matchSearch =
            event.name.toLowerCase().includes(search.toLowerCase()) ||
            event.type.toLowerCase().includes(search.toLowerCase());

        const matchFilter =
            filter === "All" ? true : event.type === filter;

        return matchSearch && matchFilter;
    });

    return (
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold mb-4">Timeline</h2>

            <div className="flex gap-3 mb-6">

                <input
                    type="text"
                    placeholder="Search by name or type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="All">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>

            </div>

            {filteredEvents.length === 0 ? (
                <p className="text-gray-400 text-center py-10">
                    No matching events found
                </p>
            ) : (

                <div className="space-y-4">

                    {filteredEvents.map((event) => (
                        <div key={event.id} className="flex items-center p-4 bg-gray-50 rounded-xl border">

                            <div className="text-2xl mr-4">
                                {event.icon}
                            </div>

                            <div>
                                <h4 className="font-bold">
                                    {event.type} with {event.name}
                                </h4>
                                <p className="text-xs text-gray-400">
                                    {event.date}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default TimeLine;