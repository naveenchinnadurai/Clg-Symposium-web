import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import PPtSection from '../components/pptSection'
import Event2Section from '../components/event2'

function DeptPage() {
    const [eventArea,setEventArea]=useState(<Event2Section/>)

    const switchPpt=()=>{
        setEventArea(<PPtSection/>)
    }
    const switchCode=()=>{
        setEventArea(<Event2Section/>)
    }
    return (
        <div className='deptpage'>
            <div className="row justify-se deptpage-div-1">
                <div className="deptpage-img"></div>
                <div className="col align-center txt-align-center deptpage-title">
                    <h1>Department of Computer Science and Engineering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus fugit sequi officiis tempora maxime ullam nemo animi, id molestiae fugiat ipsam natus mollitia nam veritatis voluptatum expedita iste libero? Illum est in earum. Temporibus repudiandae odit rerum culpa omnis?</p>
                    <div className="deptpage-btns">
                        <Link className='link-tag'>Register Now</Link>
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
                        <Link className='link-tag'>Poster Design</Link>
                    </div>
                    <div className="event-detail-switch-area">{eventArea}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeptPage