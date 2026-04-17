import React from 'react';
import { useOutletContext } from 'react-router';
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const { events } = useOutletContext();


    const dataCounts = events.reduce((acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        { name: 'Call', value: dataCounts['Call'] || 0, fill: '#1A4D2E' },
        { name: 'Text', value: dataCounts['Text'] || 0, fill: '#8B5CF6' },
        { name: 'Video', value: dataCounts['Video'] || 0, fill: '#22C55E' },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Friendship Analytics</h1>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-100">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">By Interaction Type</h3>
                
                <div className="w-full h-75">
                    {events.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    stroke="none" 
                                />
                                <Tooltip 
                                    contentStyle={{ 
                                        borderRadius: '12px', 
                                        border: 'none', 
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                                    }} 
                                />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            No data available to show analytics.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;