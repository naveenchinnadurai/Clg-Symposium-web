import React from 'react';
import { BsArrowUpCircle as Top } from 'react-icons/bs';
import MovingText from 'react-moving-text';
import { Link } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import poster from '../assets/poster.png';
import DeptCard from '../components/deptCard';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Instructions from '../components/instructions';
import { symDetails } from '../scripts/data';
import { eventDetails } from '../scripts/eventDetails';
import { guestInfo } from '../scripts/data';

function Home() {

    return (
        <MovingText
            className='home'
            type="fadeIn"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
        >
            <div className="flex flex-col items-center h-fit w-full bg-[#2e2931] bg-center bg-contain bg-no-repeat bg-blend-soft-light p-5">
                <div className="flex flex-col items-center text-center">
                    <h1 className='text-5xl sm:text-3xl lg:text-5xl leading-tight'>National Level Technical Symposium</h1>
                    <p className='text-2xl sm:text-lg lg:text-2xl font-serif font-bold mt-2'>Senguthar Engineering College (Autonomous)</p>
                    <h2 className='text-2xl sm:text-lg lg:text-2xl font-semibold mt-2'>Presents</h2>
                    <p className='text-3xl sm:text-xl lg:text-3xl font-serif mt-2'>TechSym <span className='text-5xl sm:text-3xl lg:text-5xl font-serif'>SAரYU</span> 2k24</p>
                </div>
                <div className="flex flex-col items-center text-center mt-4">
                    <div className="flex items-center">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm sm:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 sm:px-3 sm:py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform'>
                                    Register Now
                                </Link>
                            </span>
                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm sm:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 sm:px-3 sm:py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <Link to="#contact">Contact Us</Link>
                            </span>
                        </button>
                    </div>
                    <p className='mt-4 text-gray-300'>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                </div>
                <div className='flex gap-5 p-5'>
                    {
                        symDetails.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div className="bg-[#532581] w-full sm:w-2/5 p-4 text-center rounded-lg" key={card.id} id={card.id}>
                                    <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                                    <p className='text-base mb-1'>{card.content}</p>
                                    <p className='text-base'>{card.content1}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Element name="about" className="about">
                <div className="bg-[#4d415a] py-5 px-10 sm:px-2">
                    <h2 className="text-3xl font-medium tracking-wider mb-4 leading-tight">Welcome to SAரYU-2k23</h2>
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center mb-6">
                        <div className="text-base sm:text-lg px-2 sm:px-5">
                            <p className="mb-4">New beginnings, new friendships, and new horizons – all begin with a warm welcome to you. Delve into the heart of college life by signing up for our upcoming events.</p>
                            <p>Discover a realm of intellect and innovation at our college's symposium event. Engage with visionary speakers, cutting-edge research, and vibrant discussions that span across various disciplines. Join us for a day that celebrates curiosity and fosters insightful dialogues, inspiring the next generation of thought leaders.</p>
                        </div>
                        <div className="bg-[#341944] w-full sm:mx-5 h-64 sm:h-auto"></div>
                    </div>
                    <div className="w-full py-2 px-5 flex flex-col items-center">
                        <h2 className="text-xl text-[#1a0329] mb-2">SYMPOSIUM POSTER</h2>
                        <img src={poster} alt="Poster-img" className='w-9/12 sm:w-full' />
                    </div>
                </div>
            </Element>
            <div className='py-8 bg-[#1c001e]'>
                <h1 className='text-center text-2xl sm:text-xl lg:text-3xl mb-5'>Departments</h1>
                <Element className=" flex-wrap justify-center gap-5 grid grid-cols-3 px-10">
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
            <Instructions />
            <div className="py-5 bg-[#4d415a]">
                <h1 className='text-center text-2xl sm:text-xl lg:text-3xl mb-5'>Speakers Of the Event</h1>
                <div className="flex flex-wrap justify-evenly gap-5">
                    {
                        guestInfo.map((e, i) => {
                            return (
                                <div className="flex flex-col items-center bg-[#9d77c4] w-1/5 min-w-[280px] p-5 rounded-lg transition-transform duration-700 hover:scale-110" key={i}>
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
            <div className="bg-slate-400">
                <div className="grid grid-cols-4 lg:flex-row items-center justify-between bg-gradient-to-r from-[#5300a7] to-[#9a56dd] w-4/5 min-w-[280px] h-[300px] mx-auto my-12 p-8 gap-5">
                    <div className='flex flex-col col-span-3 gap-5 px-3'>
                        <h2 className='text-xl sm:text-lg lg:text-xl'>Book Your Seat Now!</h2>
                        <p className='text-base sm:text-sm lg:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam mollitia ullam veritatis aperiam culpa quos, unde doloribus fugit praesentium tempore facilis! Similique quo minima iusto beatae molestiae corrupti optio vero!</p>
                    </div>
                    <span className="bg-[#5500aa] text-white rounded-lg py-2 px-6 text-sm sm:text-xs lg:text-sm cursor-pointer w-fit">Register Now</span>
                </div>
                <Contact />
            </div>
            <div className="fixed bottom-5 right-5">
                <ScrollLink className="text-3xl sm:text-2xl lg:text-3xl text-white hover:text-gray-300" to='home-banner' smooth={true} duration={3000}>
                    <Top />
                </ScrollLink>
            </div>
            <Footer />
        </MovingText>
    );
}

export default Home;
