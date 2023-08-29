import React from 'react'
import '../stylings/pageStyle/home.css'
import AboutEvents from '../components/aboutEvents'
import SimpleCards from '../components/simpleCards'
import Footer from '../components/footer'
import DeptCard from '../components/deptCard'
import { deptDetails } from '../scripts/deptInfo'
function Home() {
    const displayCard = deptDetails.map((dept) => {
        return (
            <DeptCard
                key={dept.id}
                name={dept.nameShort}
                txt={dept.deptTxt1}
                to={dept.to}
            />
        )
    })
    return (
        <div className='home'>
            <div className="home-banner col align-center">
                <div className="banner-head col align-center">
                    <h1>National Level Technical Symposium</h1>
                    <p>Senguthar Engineering College (Autonomous)</p>
                    <h2>Presents</h2>
                    <p className='sym-name'>TechSym <span className='sym-title'>SAரYU</span> 2k23</p>
                </div>
                <div className="banner-end txt-align-center">
                    <span>Register Now</span>
                    <p>Awesome adventures await, and you're at the forefront! The doors to unforgettable experiences are swinging open.</p>
                </div>
            </div>
            <SimpleCards />
            <AboutEvents />
            <h1 className='txt-align-center dept-nav-head'>Departments</h1>
            <div className="txt-align-center redirect-main">
                <div className="dept-redirect">{displayCard}</div>
            </div>
            <Footer />
        </div>
    )
}
export default Home