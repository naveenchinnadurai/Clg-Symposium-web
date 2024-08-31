import React from 'react';
import MovingText from 'react-moving-text';
import { Link } from 'react-router-dom';
import { IoWarningOutline as Warn } from 'react-icons/io5';

function Splash() {
    return (
        <div className="flex flex-col items-center justify-between h-screen bg-gray-800 p-5">
            <MovingText
                type="fadeIn"
                duration="7000ms"
                delay="0"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
                className="flex flex-col items-center justify-center h-4/5 gap-2"
            >
                <h1 className="text-6xl text-center font-bold">Sengunthar Engineering College</h1>
                <h1 className="text-4xl text-center font-light">(Autonomous)</h1>
                <span className="text-2xl">Organizes National level Students Technical Symposium</span>
                <Link to="/home" className="bg-purple-800 text-white px-5 py-2 rounded-full mt-4 hover:bg-purple-900 transition-colors duration-300">
                    Know More
                </Link>
            </MovingText>
            <p className="text-gray-600 flex items-center gap-2 mt-4">
                <Warn /> If 404 error occurs, close all tabs and try again
            </p>
        </div>
    );
}

export default Splash;
