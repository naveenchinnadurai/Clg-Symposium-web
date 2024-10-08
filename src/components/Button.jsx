import React from 'react';

function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`z-10 relative inline-flex shadow-lg shadow-cyan-500/20 items-center justify-center p-0.5 mb-2 me-2 
                overflow-hidden text-sm sm:text-xs font-medium text-gray-900 rounded-lg group
                bg-gradient-to-br from-purple-600
                to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:focus:ring-blue-800 ${className}`}
        >
            <span className="relative px-10 text-sm md:text-lg py-3 sm:px-3 sm:py-1.5 transition-all ease-in duration-75 !hover:bg-slate-900  rounded-md group-hover:bg-opacity-0">
                {children}
            </span>
        </button>
    );
}

export default Button;
