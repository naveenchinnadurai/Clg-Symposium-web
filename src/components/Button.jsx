import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick} className = "z-10 relative inline-flex shadow-lg  shadow-cyan-500/50 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm sm:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
            <span className="relative px-10  text-sm md:text-lg py-3 sm:px-3 sm:py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {props.text}
            </span>
        </button >
    )
}

export default Button