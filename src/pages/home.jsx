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
function Home() {
    const displayCard = deptDetails.map((dept) => {
        return (
            <DeptCard
                key={dept.id}
                deptment={dept}
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
            <h1 className='txt-align-center dept-nav-head' >Departments</h1>
            <Element className="txt-align-center redirect-main" >
                <div className="dept-redirect">{displayCard}</div>
            </Element>
            <div className="row bottom-top-btn">
                <ScrollLink className="btn-top" to='home-banner' smooth={true} duration={3000}><Top /></ScrollLink>
            </div>
            <Instructions/>
            <Footer />
        </MovingText>
    )
}
export default Home