import React, { useState } from 'react'
import '../stylings/pageStyle/home.css'
import AboutEvents from '../components/homeCompo/aboutEvents'
import SymDetailsCard from '../components/homeCompo/symdetails'
import Footer from '../components/footer'
import DeptCard from '../components/deptPageCompo/deptCard'
import { deptDetails } from '../scripts/deptInfo'
import { Link } from 'react-router-dom'
import { Element, Link as ScrollLink } from 'react-scroll'
import { BsArrowUpCircle as Top } from 'react-icons/bs'
import MovingText from 'react-moving-text'
import Instructions from '../components/homeCompo/instructions'
import GuestCard from '../components/homeCompo/guestCard'
import guestInfo from '../scripts/guestInfo'
function Home() {
    const displayCard = deptDetails.map((dpt) => {
        return (
            <DeptCard
                key={dpt.id}
                deptment={dpt}
            />
        )
    })
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
            <div className="col align-center home-banner">
                <div className="banner-head col align-center">
                    <h1>National Level Technical Symposium</h1>
                    <p>Senguthar Engineering College (Autonomous)</p>
                    <h2>Presents</h2>
                    <p className='sym-name'>TechSym <span className='sym-title'>SAரYU</span> 2k23</p>
                </div>
                <div className="banner-end txt-align-center">
                    <Link
                        to='https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform'
                        className='link-tag'
                    >Register Now</Link>
                    <Link className='link-tag'>Contact Us</Link>
                    <p>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                </div>
            </div>
            <SymDetailsCard />
            <Element name="about" className="about"><AboutEvents /></Element>
            <div className='redirect-main'>
                <h1 className='txt-align-center' style={{ marginBottom: 20 }}>Departments</h1>
                <Element className="txt-align-center" >
                    <div className="dept-redirect">{displayCard}</div>
                </Element>
            </div>
            <Instructions />
            <div className="guest-div">
                <h1 className='txt-align-center guest-title'>Speakers Of the Event</h1>
                <div className="row justify-se guest-card-div">
                    {
                        guestInfo.map((e) => {
                            return (
                                <GuestCard
                                    key={e.id}
                                    img={e.img}
                                    name={e.name}
                                    role={e.role}
                                    role1={e.role1}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="row justify-se align-center register-div">
                <div className='col'>
                    <h2>Book Your Seat Now!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam mollitia ullam veritatis aperiam culpa quos, unde doloribus fugit praesentium tempore facilis! Similique quo minima iusto beatae molestiae corrupti optio vero!</p>
                </div>
                <span className="home-btn">Register Now</span>
            </div>
            <div className="row bottom-top-btn">
                <ScrollLink className="btn-top" to='home-banner' smooth={true} duration={3000}><Top /></ScrollLink>
            </div>
            <Footer />
        </MovingText>
    )
}
export default Home