import React, { useState } from 'react';
import EventFollows from '../scripts/EventFollows';

const Timeline = () => {
    const [currentDay, setCurrentDay] = useState('Day1');

    return (
        <div className='bg-slate-900 p-4 flex flex-col justify-end items-end'>
            <div className="self-center flex flex-col sm:items-center md:p-2">
                <h1 className="text-3xl font-medium">Event Details: Timeline and Venue</h1>
                <h1 className='text-xl sm:text-2xl font-bold py-5'>{currentDay}</h1>
            </div>
            {EventFollows[currentDay].map((a, i) => (
                <ol key={i} className="relative border-s md:w-3/5 border-gray-200 dark:border-gray-700 pb-10">
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{a.time}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{a.eventname}</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:w-2/3">{a.eventdetails}</p>
                    </li>
                </ol>
            ))}
            <button 
                onClick={() => setCurrentDay(currentDay === 'Day1' ? 'Day2' : 'Day1')}
                className="
                    relative inline-flex items-center justify-center p-0.5 mb-2 me-2 
                    overflow-hidden text-sm sm:text-base font-medium text-gray-900 
                    rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 
                    group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white 
                    dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                    dark:focus:ring-blue-800
                ">
                <span className="
                    relative px-4 py-2 sm:px-6 sm:py-3 transition-all ease-in duration-75 
                    bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0
                ">
                    {currentDay === 'Day1' ? 'Next Day' : 'Previous Day'}
                </span>
            </button>
        </div>
    );
};

export default Timeline;
