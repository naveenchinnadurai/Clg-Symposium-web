import React from 'react';
import { BsArrowUpCircle as Top } from 'react-icons/bs';
import MovingText from 'react-moving-text';
import { Link } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import Contact from '../components/contact';
import DeptCard from '../components/deptCard';
import Footer from '../components/footer';
import { guestInfo, instruction, symDetails } from '../scripts/data';
import { eventDetails } from '../scripts/eventDetails';
import ProfileCard from '../components/profileCard';

function Home() {

    return (
        <MovingText
            type="fadeIn"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className=" p-2"
        >
            <div className="flex flex-col items-center h-fit w-full">
                <div className='flex flex-col gap-y-20 justify-around pt-5 h-screen'>
                    <div className="flex flex-col items-center gap-1 md:gap-3 text-center">
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight'>National Level Technical Symposium</h1>
                        <p className='text-xl sm:text-lg lg:text-4xl font-serif font-bold mt-2'>Sengunthar Engineering College (Autonomous)</p>
                        <h2 className='text-lg sm:text-lg lg:text-2xl font-semibold md:mt-2'>Presents</h2>
                        <p className='text-2xl sm:text-xl lg:text-4xl font-serif mt-2'>TechSym <span className='text-2xl md:text-5xl sm:text-3xl lg:text-4xl font-serif mx-1'>SAரYU</span> 2k24</p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-4">
                        <div className="flex items-center">
                            {
                                [{ text: "Register Now", to: "https://docs.google.com/forms/d/e/1FAIpQLSe1zUTiCxwRnHlH4EzkCQYEMesMl1t8-5Dynfu6Ml7pN6N1Lg/viewform" }].map((e, i) => {
                                    return (
                                        <button key={i} className="relative inline-flex shadow-lg  shadow-cyan-500/50 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm sm:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                            <span className="relative px-10  text-sm md:text-lg py-3 sm:px-3 sm:py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                <Link to={e.to}> {e.text} </Link>
                                            </span>
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <p className='mt-4 text-gray-300 px-2'>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
                    {
                        symDetails.map((card,i) => {
                            const Icon = card.icon;
                            return (
                                <div key={i} className="relative flex flex-col w-full h-auto p-3 bg-gray-900 rounded-xl overflow-hidden isolate font-sans">
                                    <div className="absolute w-80 h-80 bg-white/0 opacity-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out"></div>
                                    <div className="absolute w-80 h-80 bg-white/0 opacity-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out"></div>

                                    <div className="absolute inset-0.5 rounded-lg bg-gray-800 z-2"></div>

                                    <div className="absolute w-1 inset-y-2.5 left-2 bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff] rounded-sm transition-transform duration-300 ease-in-out transform"></div>

                                    <div className="text-[#32a6ff] py-2 px-5 font-medium text-lg z-5 transition-transform duration-300 ease-in-out transform">
                                        {card.title}
                                    </div>

                                    <div className="text-gray-400 px-5 z-5 transition-transform duration-300 ease-in-out transform">
                                        {card.content}
                                    </div>
                                    <div className="text-gray-400 px-5 z-5 transition-transform duration-300 ease-in-out transform">
                                        {card.content1}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <Element name="about" className="about">
                <div className=" p-3 sm:p-5 md:p-8">
                    <h2 className="text-2xl md:text-3xl text-center font-medium tracking-wider mb-4 leading-tight">Welcome to SAரYU-2k24</h2>
                    <div className="text-lg sm:text-xl px-2 text-gray-400 sm:px-5 flex flex-col items-center">
                        <p className="mb-4 text-center w-full">New beginnings, new friendships, and new horizons – all begin with a warm welcome to you. Delve into the heart of college life by signing up for our upcoming events.Discover a realm of intellect and innovation at our college's symposium event. Engage with visionary speakers, cutting-edge research, and vibrant discussions that span across various disciplines. Join us for a day that celebrates curiosity and fosters insightful dialogues, inspiring the next generation of thought leaders.</p>
                    </div>

                </div>
            </Element>
            <div className="relative">
                <div className=''>
                    <h1 className='text-center text-2xl sm:text-xl lg:text-3xl mb-5'>Departments</h1>
                    <Element className="px-7 flex-wrap justify-center gap-5 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-col-4">
                        {
                            eventDetails.map((dpt) => {
                                return (
                                    <DeptCard
                                        key={dpt.id}
                                        deptment={dpt}
                                    />
                                )
                            })
                        }
                    </Element>
                </div>
                <div className='w-full py-5'>
                    <h1 className='text-center text-3xl font-medium tracking-wider mb-4'>General Instruction</h1>
                    <div className="flex flex-col justify-between w-full mx-auto sm:py-5 px-5 sm:px-0 sm:rounded-xl">
                        {
                            instruction.map((i) => {
                                return (
                                    <div className="flex  mb-2 p-2" key={i.id}>
                                        <span className="bg-[#31065c] text-white py-1 px-3 rounded-full text-sm h-fit">{i.id}</span>
                                        <p className="text-md ml-2">{i.txt}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className='text-center text-2xl sm:text-xl lg:text-3xl mb-5'>Speakers Of the Event</h1>
                <div className="flex w-full overflow-auto flex-row gap-5 p-2 xl:justify-center">
                    {
                        guestInfo.map((e, i) => {
                            return (
                                <div className="z-10 min-w-[280px] grid justify-items-center grid-cols-1 bg-slate-900 p-5 rounded-lg transition-transform duration-700 hover:scale-110 cursor-pointer" key={i}>
                                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                                        <img src={e.img} alt={e.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-xl font-semibold mb-1">{e.name}</h2>
                                    <h3 className="text-lg font-medium mb-1">{e.role1}</h3>
                                    <h4 className="text-md font-light">{e.role}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="">
                <Contact />
            </div>
            <h1 className="text-2xl font-medium text-center">Development Team</h1>
            <div className="grid  md:grid-cols-3 p-5 gap-3">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </MovingText>
    );
}

export default Home;
