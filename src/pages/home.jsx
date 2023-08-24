import React from 'react'
import '../stylings/pageStyle/home.css'
import AboutEvents from '../components/aboutEvents'
import SimpleCards from '../components/simpleCards'
function Home() {
    return (
        <div className='home'>
            <div className="home-banner col align-center">
                <div className="banner-head col align-center">
                    <h1>National Level Technical Symposium</h1>
                    <p>Senguthar Engineering College (Autonomous)</p>
                    <h2>Presents</h2>
                    <p>TechSym <span className='sym-title'>SAரYU</span> 2k23</p>
                </div>
                <div className="banner-end txt-align-center">
                    <span>Register Now</span>
                    <p>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                </div>
            </div>
            <SimpleCards/>
            <AboutEvents/>
        </div>
    )
}
export default Home