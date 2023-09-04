import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import EventSection from '../components/eventSection'
import { deptDetails } from '../scripts/deptInfo'
import { Element, Link as ScrollLink } from 'react-scroll'
import { BsArrowUpCircle as Top } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'


function DeptPage(props) {
    const onOpen = () => {
        window.scrollTo(0, 0)
    }
    onOpen()
    const location = useLocation();
    const cse = location.state;
    const Event1 = <EventSection
        eventName={cse.event1.eventTitle}
        eventInfo={cse.event1.generalInfo}
        eventTxt={cse.event1.txt1}
        date={cse.event1.date}
        time={cse.event1.time}
        venue={cse.event1.venue}
        title2={cse.event1.extraInfo.title}
        eventInfo2={cse.event1.extraInfo.txt}
        coOrdinatorName={cse.event1.coOrdinator.name}
        coOrdinatorPhn={cse.event1.coOrdinator.phn}
    />
    const Event2 = <EventSection
        eventName={cse.event2.eventTitle}
        eventInfo={cse.event2.generalInfo}
        eventTxt={cse.event2.txt1}
        date={cse.event2.date}
        time={cse.event2.time}
        venue={cse.event2.venue}
        title2={cse.event2.extraInfo.title}
        eventInfo1={cse.event2.extraInfo.txt1}
        eventInfo2={cse.event2.extraInfo.txt2}
        coOrdinatorName={cse.event2.coOrdinator.name}
        coOrdinatorPhn={cse.event2.coOrdinator.phn}
    />
    const Event3 = <EventSection
        eventName={cse.event3.eventTitle}
        eventInfo={cse.event3.generalInfo}
        eventTxt={cse.event3.txt1}
        date={cse.event3.date}
        time={cse.event3.time}
        venue={cse.event3.venue}
        title2={cse.event3.extraInfo.title}
        eventInfo1={cse.event3.extraInfo.txt1}
        eventInfo2={cse.event3.extraInfo.txt2}
        coOrdinatorName={cse.event3.coOrdinator.name}
        coOrdinatorPhn={cse.event3.coOrdinator.phn}
    />
    const [eventArea, setEventArea] = useState(Event2)
    const switchPpt=()=>{
        setEventArea(Event1)
    }
    const switchCode=()=>{
        setEventArea(Event2)
    }
    const switchPoster=()=>{
        setEventArea(Event3)
    }

    return (
        <div className='deptpage' data-aos='fade-in' data-aos-duration='2000'>
            <Element className="row justify-se deptpage-div-1">
                <div className="deptpage-img"></div>
                <div className="col align-center txt-align-center deptpage-title">
                    <h1>Department of {cse.deptName}-<span>{cse.deptSpecialName}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?</p>
                    <div className="deptpage-btns">
                        <Link
                            className='link-tag'
                            to='https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform'
                        >Register Here</Link>
                        <Link to='/home' className='link-tag'>Home </Link>
                    </div>
                </div>
            </Element>
            <div className="txt-align-center deptpage-div-2">
                <h1>Event Details</h1>
                <div className="row align-center event-details">
                    <div className="col event-navbar">
                        <Link className='row align-center link-tag' onClick={switchPpt}>PPT</Link>
                        <Link className='row align-center link-tag' onClick={switchCode}>{cse.event2.eventTitle}</Link>
                        <Link className='row align-center link-tag' onClick={switchPoster}>{cse.event3.eventTitle}</Link>
                        <Link className='row align-center link-tag'>Non-technical Events</Link>
                    </div>
                    <div className="event-detail-switch-area">{eventArea}</div>
                </div>
            </div>
            <div className="row bottom-top-btn">
                <ScrollLink className="btn-top" to='deptpage-div-1' smooth={true} duration={3000}><Top /></ScrollLink>
            </div>
            <Footer />
        </div>
    )
}

export default DeptPage