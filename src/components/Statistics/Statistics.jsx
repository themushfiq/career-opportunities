import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: "A1",
            marks: 40,
        },
        {
            name: "A2",
            marks: 54,
        },
        {
            name: "A3",
            marks: 46,
        },
        {
            name: "A4",
            marks: 25,
        },
        {
            name: "A5",
            marks: 49,
        },
        {
            name: "A6",
            marks: 51,
        },
        {
            name: "A7",
            marks: 58,
        },
        {
            name: "A8",
            marks: 60,
        },
    ];

    return (
        <div className='p-3 lg:px-16'>
            <h3 className='text-center font-semibold text-2xl py-5'>My All Assignments Marks (A1-A8)</h3>
            <hr className='mb-5' />
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart
                    width={600}
                    height={300}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;
