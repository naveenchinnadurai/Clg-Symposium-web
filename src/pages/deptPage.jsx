import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import EventSection from '../components/eventSection'
import { deptDetails } from '../scripts/deptInfo'
import { Element,Link as ScrollLink } from 'react-scroll'
import { BsArrowUpCircle as Top } from 'react-icons/bs'


function DeptPage(props) {
    const cse = deptDetails[0]
    const PPTSection = <EventSection
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
    const [eventArea, setEventArea] = useState(PPTSection)

    const switchPpt = () => {
        setEventArea(PPTSection)
    }
    const switchCode = () => {
        setEventArea(
            <EventSection
                eventName={cse.event2.eventTitle}
                eventInfo={cse.event2.generalInfo}
                eventTxt={cse.event1.txt1}
                date={cse.event2.date}
                time={cse.event2.time}
                venue={cse.event2.venue}
                title2={cse.event2.extraInfo.title}
                eventInfo1={cse.event2.extraInfo.txt1}
                eventInfo2={cse.event2.extraInfo.txt2}
                coOrdinatorName={cse.event2.coOrdinator.name}
                coOrdinatorPhn={cse.event2.coOrdinator.phn}
            />
        )
    }
    const switchPoster = () => {
        setEventArea(
            <EventSection
                eventName='Poster Design'
                eventInfo='sed laborum. Aliquid commodi ad quis natus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. nemo at ad voluptatum consectetur culpa delectus explicabo quam nonTotam, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                eventTxt='Indivual participation, no team participation allowed'
                date='27/09/2023'
                time='11:45AM'
                venue='CSE lab-I,1nd floor,Main Block'
                title2='Theme'
                eventInfo2='Theme will be announced on the spot, can use any type design tools.'
                coOrdinatorName='S.Jana Tony(st)CSE-III yr'
                coOrdinatorPhn='7895642631'
            />
        )
    }
    return (
        <div className='deptpage'>
            <Element className="row justify-se deptpage-div-1">
                <div className="deptpage-img"></div>
                <div className="col align-center txt-align-center deptpage-title">
                    <h1>Department of Computer Science and Engineering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?</p>
                    <div className="deptpage-btns">
                        <Link
                            className='link-tag'
                            to='https://docs.google.com/forms/d/e/1FAIpQLSctdEF5mNAKptZJaaE8say8cbBSBvo6dxJlia5v6eK5mugjng/viewform?fbzx=2426317002727290543'
                        >Register Now</Link>
                        <Link className='link-tag'>Contact </Link>
                    </div>
                </div>
            </Element>
            <div className="txt-align-center deptpage-div-2">
                <h1>Event Details</h1>
                <div className="row align-center event-details">
                    <div className="col event-navbar">
                        <Link className='link-tag' onClick={switchPpt}>PPT</Link>
                        <Link className='link-tag' onClick={switchCode}>Code Cracking</Link>
                        <Link className='link-tag' onClick={switchPoster}>Poster Design</Link>
                        <Link className='link-tag'>Non-technical Events</Link>

                    </div>
                    <div className="event-detail-switch-area">{eventArea}</div>
                </div>
            </div>
            <ScrollLink className="row btn-top" to='deptpage-div-1' smooth={true} duration={1000}><Top /></ScrollLink>
            <Footer />
        </div>
    )
}

export default DeptPage