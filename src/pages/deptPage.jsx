import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import EventSection from '../components/deptPageCompo/eventSection'
import { Element, Link as ScrollLink } from 'react-scroll'
import { BsArrowUpCircle as Top } from 'react-icons/bs'
function DeptPage(props) {
    const deptObj = JSON.parse(document.cookie)
    const [event, setEvent] = useState(deptObj.event1)
    const switchEvent1 = () => {
        setEvent(deptObj.event1)
    }
    const switchEvent2 = () => {
        setEvent(deptObj.event2)
    }
    const switchEvent3 = () => {
        setEvent(deptObj.event3)
    }

    return (
        <div className='deptpage' data-aos='fade-in' data-aos-duration='2000'>
            <Element className="row justify-se deptpage-div-1">
                <div className="deptpage-img">
                    <img src={deptObj.img}/>
                </div>
                <div className="col align-center txt-align-center deptpage-title">
                    <h1>Department of {deptObj.deptName}-<span>{deptObj.deptSpecialName}</span></h1>
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
                        <Link className='row align-center link-tag' onClick={switchEvent1}>PPT</Link>
                        <Link className='row align-center link-tag' onClick={switchEvent2}>{deptObj.event2.eventTitle}</Link>
                        <Link className='row align-center link-tag' onClick={switchEvent3}>{deptObj.event3.eventTitle}</Link>
                    </div>
                    <div className="event-detail-switch-area">
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
            <div className="row bottom-top-btn">
                <ScrollLink className="btn-top" to='deptpage-div-1' smooth={true} duration={1000}><Top /></ScrollLink>
            </div>
            <Footer />
        </div>
    )
}

export default DeptPage