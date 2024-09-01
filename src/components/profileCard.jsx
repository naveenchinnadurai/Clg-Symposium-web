import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import profile from '../assets/chiefGuest/guest1.jpg'

import React from 'react';

const ProfileCard = () => {
    return (
        <div className="max-w-sm bg-gray-900 text-white rounded-lg p-6 flex space-x-4 z-10">
            <img className="w-20 h-20 rounded-full"
                src={profile} alt="Bonnie Green"
            />
            <div>
                <h2 className="text-xl font-bold">Bonnie Green</h2>
                <p className="text-sm text-gray-400">CEO/Co-founder</p>
                <p className="text-sm mt-2">Bonnie drives the technical strategy of the themesberg platform and brand.</p>
                <div className="flex space-x-3 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-twitter"></i>
                        <FaLinkedin className='text-2xl hover:text-sky-600 ease-out duration-300' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-facebook"></i>
                        <FaGithub className='text-2xl hover:text-sky-600 ease-out duration-300' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-github"></i>
                        <FaInstagram className='text-2xl hover:text-sky-600 ease-out duration-300'/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;