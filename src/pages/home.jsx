import React, { useState } from 'react'
import '../stylings/pageStyle/home.css'
import AboutEvents from '../components/aboutEvents'
import SimpleCards from '../components/simpleCards'
import Footer from '../components/footer'
import DeptCard from '../components/deptCard'
import { deptDetails } from '../scripts/deptInfo'
import { Link } from 'react-router-dom'
import { Element, Link as ScrollLink } from 'react-scroll'
import { BsArrowUpCircle as Top } from 'react-icons/bs'
import MovingText from 'react-moving-text'
import poster from '../assets/poster.jpg'
function Home() {
    const displayCard = deptDetails.map((dept) => {
        return (
            <DeptCard
                key={dept.id}
                name={dept.nameShort}
                txt={dept.deptTxt1}
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
                        to='https://docs.google.com/forms/d/e/1FAIpQLSctdEF5mNAKptZJaaE8say8cbBSBvo6dxJlia5v6eK5mugjng/viewform?fbzx=2426317002727290543'
                        className='link-tag'
                    >Register Now</Link>
                    <p>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                </div>
            </div>
            <SimpleCards />
            <Element name="about" className="about"><AboutEvents /></Element>
            <div className="row poster-img-div" data-aos="fade-in">
                <img src={poster} alt="Poster-img" className='poster-img' />
            </div>
            <h1 className='txt-align-center dept-nav-head' >Departments</h1>
            <Element className="txt-align-center redirect-main" >
                <div className="dept-redirect">{displayCard}</div>
            </Element>
            <div className="bottom-top-btn" data-aos="fade-in">
                <ScrollLink className="row btn-top" to='home-banner' smooth={true} duration={3000}><Top /></ScrollLink>
            </div>
            <Footer />
        </MovingText>
    )
}
export default Home