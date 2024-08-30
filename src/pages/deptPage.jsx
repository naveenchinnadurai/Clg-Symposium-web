import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import { BsArrowUpCircle as Top } from 'react-icons/bs';
import Footer from '../components/footer';
import EventSection from '../components/eventSection';

function DeptPage(props) {
    const deptObj = JSON.parse(document.cookie);
    const [event, setEvent] = useState(deptObj.event1);

    const switchEvent1 = () => setEvent(deptObj.event1);
    const switchEvent2 = () => setEvent(deptObj.event2);
    const switchEvent3 = () => setEvent(deptObj.event3);

    return (
        <div className="bg-purple-800 min-h-screen" data-aos="fade-in" data-aos-duration="2000">
            <Element name="deptpage-div-1" className="flex flex-row justify-between bg-purple-900 p-8">
                <div className="w-1/3 flex justify-center items-center">
                    <img src={deptObj.img} alt={deptObj.deptName} className="h-48 w-48 rounded-full object-cover" />
                </div>
                <div className="w-2/3 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Department of {deptObj.deptName} <span className="text-purple-300">{deptObj.deptSpecialName}</span>
                    </h1>
                    <p className="text-lg text-gray-200 mt-4 mb-6 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg"
                            to="https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform"
                            target="_blank"
                        >
                            Register Here
                        </Link>
                        <Link className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg" to="/home">
                            Home
                        </Link>
                    </div>
                </div>
            </Element>

            <div className="text-center bg-purple-900 p-8">
                <h1 className="text-3xl font-bold text-white mb-4">Event Details</h1>
                <div className="flex flex-row justify-between">
                    <div className="w-1/3 flex flex-col">
                        <Link className="bg-purple-700 text-white px-4 py-2 mb-2 rounded-full text-lg" onClick={switchEvent1}>
                            PPT
                        </Link>
                        <Link className="bg-purple-700 text-white px-4 py-2 mb-2 rounded-full text-lg" onClick={switchEvent2}>
                            {deptObj.event2.eventTitle}
                        </Link>
                        <Link className="bg-purple-700 text-white px-4 py-2 mb-2 rounded-full text-lg" onClick={switchEvent3}>
                            {deptObj.event3.eventTitle}
                        </Link>
                    </div>
                    <div className="w-2/3">
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

            <div className="flex justify-center p-4">
                <ScrollLink className="text-purple-700 text-3xl hover:text-purple-900 transition-transform" to="deptpage-div-1" smooth={true} duration={1000}>
                    <Top />
                </ScrollLink>
            </div>

            <Footer />
        </div>
    );
}

export default DeptPage;
