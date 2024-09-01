import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import { BsArrowUpCircle as Top } from 'react-icons/bs';
import Footer from '../components/footer';
import EventSection from '../components/eventSection';
import Button from '../components/Button';

function DeptPage(props) {
    const deptObj = JSON.parse(document.cookie);
    const [event, setEvent] = useState(deptObj.event1);

    const switchEvent1 = () => setEvent(deptObj.event1);
    const switchEvent2 = () => setEvent(deptObj.event2);
    const switchEvent3 = () => setEvent(deptObj.event3);

    return (
        <div className="min-h-screen" data-aos="fade-in" data-aos-duration="2000">
            <Element name="deptpage-div-1" className="flex flex-row justify-between p-8">
                <div className="w-1/3 flex justify-center items-center">
                    <img src={deptObj.img} alt={deptObj.deptName} className="h-60 w-60 rounded-full object-cover" />
                </div>
                <div className="w-2/3">
                    <h1 className="text-4xl font-bold text-white">
                        Department of {deptObj.deptName} <span className="text-purple-300">({deptObj.deptSpecialName})</span>
                    </h1>
                    <p className="text-lg text-gray-200 mt-4 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?
                    </p>
                    <div className="flex gap-4">
                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform"
                            target="_blank">
                            <Button text="Register Here" />
                        </Link>
                        <Link to="/home" >
                            <Button text="Home" />
                        </Link>
                    </div>
                </div>
            </Element >

            <div className="text-center p-8">
                <h1 className="text-3xl font-bold text-white mb-4">Event Details</h1>
                <div className="flex gap-2 justify-between">
                    <div className="w-1/3 flex flex-col">
                        <Link className="bg-gray-700 text-white px-4 py-2 mb-2 rounded-lg text-lg" onClick={switchEvent1}>
                            PPT
                        </Link>
                        <Link className="bg-gray-700 text-white px-4 py-2 mb-2 rounded-lg text-lg" onClick={switchEvent2}>
                            {deptObj.event2.eventTitle}
                        </Link>
                        <Link className="bg-gray-800 text-white px-4 py-2 mb-2 rounded-lg text-lg" onClick={switchEvent3}>
                            {deptObj.event3.eventTitle}
                        </Link>
                    </div>
                    <div className="w-2/3 z-10">
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
