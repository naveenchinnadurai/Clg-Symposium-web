import React from 'react';
import { Link } from 'react-router-dom';

function DeptCard(props) {
  const dept = props.deptment;

  const setDeptInfo = () => {
    document.cookie = JSON.stringify(dept);
  };

  return (
    <div
      className='
        flex flex-col justify-center gap-3 border border-gray-200 cursor-pointer 
        rounded-lg shadow p-4 bg-slate-900 hover:bg-gray-800 dark:border-gray-700 
        transition-transform duration-300 transform hover:scale-105
      '
      data-aos="zoom-in-up"
      data-aos-offset="1"
      data-aos-duration='2s'
    >
      <div className='flex justify-center'>
        <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src={dept.img} alt={dept.nameShort} />
      </div>
      <h2 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white text-center"> {dept.nameShort} </h2>
      <p className='text-sm sm:text-base text-center text-gray-300'> {dept.deptTxt1} </p>
      <Link to='/deptpage' onClick={setDeptInfo} className='self-center mt-4'>
        <button className="
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
            Know more
          </span>
        </button>
      </Link>
    </div>
  );
}

export default DeptCard;
