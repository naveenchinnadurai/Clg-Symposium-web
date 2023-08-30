import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import EventSection from '../components/eventSection'
function DeptPage() {
    const [eventArea, setEventArea] = useState(
        <EventSection
            eventName='Paper Presentation'
            eventInfo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae sit sed nihil, a excepturi tempora possimus iure maxime dignissimos ducimus voluptate inventore, nisi iusto, et autem ratione officia vitae.'
            eventTxt='Last date for paper Submission:19/09/2023'
            date='26/09/2023'
            time='12:30PM'
            venue='CSE lab-I,1st floor,Main Block'
            title2='Topics'
            eventInfo2='Any Topics as per your wish and convenience'
            coOrdinatorName='K.Akash(st)CSE-III yr'
            coOrdinatorPhn='9878567465'
        />
    )

    const switchPpt = () => {
        setEventArea(
            <EventSection
                eventName='Paper Presentation'
                eventInfo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae sit sed nihil, a excepturi tempora possimus iure maxime dignissimos ducimus voluptate inventore, nisi iusto, et autem ratione officia vitae.'
                eventTxt='Last date for paper Submission:19/09/2023'
                date='26/09/2023'
                time='12:30PM'
                venue='CSE lab-I,1st floor,Main Block'
                title2='Topics'
                eventInfo2='Any Topics as per your wish and convenience'
                coOrdinatorName='K.Akash(st)CSE-III yr'
                coOrdinatorPhn='9878567465'
            />
        )
    }
    const switchCode = () => {
        setEventArea(
            <EventSection
                eventName='Code Cracking '
                eventInfo='nemo at ad voluptatum consectetur culpa delectus explicabo quam non sed laborum. Aliquid commodi ad quis natus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                eventTxt='A Team can consist of maximum 3 memebers'
                date='27/09/2023'
                time='10:30AM'
                venue='CSE lab-III,2nd floor,Main Block'
                title2='Rounds:'
                eventInfo2='Round:1 - Preliminary/ Debugging(20 mins)'
                eventInfo3='Round:2 - Coding Round(30 mins)'
                coOrdinatorName='R.Manikandan(st)CSE-III yr'
                coOrdinatorPhn='8907663542'
            />
        )
    }
    const switchPoster=()=>{
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
            <div className="row justify-se deptpage-div-1">
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
            </div>
            <div className="txt-align-center deptpage-div-2">
                <h1>Event Details</h1>
                <div className="row align-center event-details">
                    <div className="col event-navbar">
                        <Link className='link-tag' onClick={switchPpt}>PPT</Link>
                        <Link className='link-tag' onClick={switchCode}>Code Cracking</Link>
                        <Link className='link-tag'onClick={switchPoster}>Poster Design</Link>
                        <Link className='link-tag'>Non-technical Events</Link>

                    </div>
                    <div className="event-detail-switch-area">{eventArea}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeptPage