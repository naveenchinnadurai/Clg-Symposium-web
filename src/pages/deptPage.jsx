import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import Button from '../components/Button';
import EventSection from '../components/eventSection';
import { IoIosArrowBack as MobileArrow, IoMdArrowRoundBack as DesktopArrow } from "react-icons/io";

function DeptPage() {
    const location = useLocation();
    const deptObj = location.state;
    console.log(location);
    const [event, setEvent] = useState(deptObj.event1);

    const changeEvent = (eventProp) => {
        setEvent(eventProp);
    }

    return (
        <div className="relative min-h-screen" data-aos="fade-in" data-aos-duration="2000">
            {/* <Link to="/home" className='md:absolute md:top-5 md:left-5 pt-5'>
                <DesktopArrow className='text-4xl mt-5 ml-5' />
                {
                    window.innerWidth <= 700 ? (
                        <MobileArrow className='text-4xl' />
                    ) : (
                        <DesktopArrow className='text-4xl' />
                    )
                }
            </Link> */}
            <Element name="deptpage-div-1" className="flex flex-col md:flex-row justify-between px-8 pt-5">
                <div className="md:w-1/3 flex md:justify-center items-center">
                    <img src={deptObj.img} alt={deptObj.deptName} className="h-52 md:h-60 w-52 md:w-60 rounded-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                    <h1 className="text-4xl font-bold text-white">
                        Department of {deptObj.deptName} <span className="text-purple-300">({deptObj.deptSpecialName})</span>
                    </h1>
                    <p className="text-lg text-gray-200 mt-4 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?
                    </p>
                    <div className="flex gap-4">
                        <Button>
                            <Link
                                to="https://docs.google.com/forms/d/e/1FAIpQLSe1zUTiCxwRnHlH4EzkCQYEMesMl1t8-5Dynfu6Ml7pN6N1Lg/viewform"
                                target="_blank">
                                Register
                            </Link>
                        </Button>
                        <Button>
                            <Link to="/home" > Home </Link>
                        </Button>
                    </div>
                </div>
            </Element >

            <div className="text-center flex flex-col justify-center p-2">
                <h1 className="text-3xl font-bold text-white mb-4">Event Details</h1>
                <div className="flex flex-col justify-center items-center md:w-5/6 lg:w-4/5 mx-auto">
                    <div className="z-10  w-full justify-center gap-2 md:gap-3 flex">
                        <button className={`px-7 py-2 rounded-t-lg text-lg z-10 ${event.eventTitle === deptObj.event1.eventTitle ? "bg-slate-900" : null}`} onClick={() => changeEvent(deptObj.event1)}>
                            PPT
                        </button>
                        <button className={`px-4 py-2 rounded-t-lg text-lg ${event.eventTitle === deptObj.event2.eventTitle ? "bg-slate-900" : null}`} onClick={() => changeEvent(deptObj.event2)}>
                            {deptObj.event2.eventTitle}
                        </button>
                        <button className={`px-4 py-2  rounded-t-lg text-lg ${event.eventTitle === deptObj.event3.eventTitle ? "bg-slate-900" : null}`} onClick={() => changeEvent(deptObj.event3)}>
                            {deptObj.event3.eventTitle}
                        </button>
                    </div>
                    <div className="w-full z-10">
                        <EventSection
                            eventName={event.eventTitle}
                            eventInfo={event.generalInfo}
                            eventTxt={event.txt1}
                            date={event.date}
                            time={event.time}
                            venue={event.venue}
                            title2={event.extraInfo.title}
                            eventInfo2={event.extraInfo.txt}
                            coOrdinatorName={event.coOrdinator.name}
                            coOrdinatorPhn={event.coOrdinator.phn}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DeptPage;
