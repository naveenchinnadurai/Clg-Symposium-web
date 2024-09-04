import React from 'react';
import EventFollows from '../scripts/EventFollows';

const Timeline = () => {
    return (
        <div className='bg-slate-900 p-4 flex flex-col  justify-end items-end'>
            <div className="self-center flex flex-col sm:items-center md:p-2">
                <h1 className="text-3xl font-medium">Event Details: Timeline and Venue </h1>
                <h1 className='text-xl sm:text-2xl font-bold py-5 '>DAY 1</h1>
            </div>
            {
                EventFollows.map((a, i) => {
                    return (
                        <ol class="relative border-s md:w-3/5 border-gray-200 dark:border-gray-700 pb-10">
                            <li class=" ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{a.time}</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{a.eventname}</h3>
                                <p class=" text-base font-normal text-gray-500 dark:text-gray-400 md:w-2/3">{a.eventdetails}</p>
                            </li>
                        </ol>
                    )
                })
            }
        </div>
    );
};

export default Timeline;