import React from "react";
import { FaBehance, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const ProfileCard = (props) => {
  const data = props.profileData;
  return (
    <div className="bg-gray-900 text-white rounded-lg flex flex-col h-fit justify-start items-start space-x-4 z-10 py-1">
      <div className="flex gap-3 p-3">
        <img className="w-20 h-20 rounded-full" src={data.img} alt={data.alt} />
        <div>
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-sm text-gray-400 mt-2">{data.dept}</p>
          <p className="text-sm text-gray-400">{data.specialization}</p>
        </div>
      </div>
      <div className="pb-3">
        <p className="text-sm pe-1">{data.about}</p>
        <div className="flex space-x-3 mt-4">
          <a href={data.linkedIn} target="_blank" className="text-gray-400 hover:text-white" >
            <FaLinkedin className="text-2xl hover:text-sky-600 ease-out duration-300" />
          </a>
          {
            data.alt === "akash" ? (
              <a href={data.behance} target="_blank" className="text-gray-400 hover:text-white">
                <FaBehance className="text-2xl hover:text-sky-600 ease-out duration-300" />
              </a>
            ) : null
          }
          <a href={data.github} target="_blank" className="text-gray-400 hover:text-white">
            <FaGithub className="text-2xl hover:text-sky-600 ease-out duration-300" />
          </a>
          <a href={data.instagram} target="_blank" className="text-gray-400 hover:text-white">
            <FaInstagram className="text-2xl hover:text-sky-600 ease-out duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;