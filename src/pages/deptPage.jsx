import React from 'react'
import '../stylings/pageStyle/deptpage.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

function DeptPage() {
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
                        <Link className='link-tag'>PPT</Link>
                        <Link className='link-tag'>Code Cracking</Link>
                        <Link className='link-tag'>Poster Design</Link>
                    </div>
                    <div className="txt-align-left event-details-div">
                        <h2>Paper Presentation</h2>
                        <div className="row justify-sb ppt-main-div">
                            <div className="ppt-div-1">
                                <h3>General Instructions</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae sit sed nihil, a excepturi tempora possimus iure maxime dignissimos ducimus voluptate inventore, nisi iusto, et autem ratione officia vitae.</p>
                                <p className='ppt-date'>Last date for paper Submission:19/09/2023</p>
                                <div className="event-time">
                                    <span>Time: 12:30PM</span>
                                    <span>Date:26/09/2023</span>
                                    <p>Venue: CSE lab III,2nd floor,Main Block</p>
                                </div>
                            </div>
                            <div className="ppt-div-2">
                                <h4>Topics</h4>
                                <span>Any Topics, regarding your domain</span>
                            </div>
                        </div>
                        <div className="col event-incharge-details">
                            <h4>Event Co-ordinator:</h4>
                            <span>Name:K Akash(st)CSE-III yr</span>
                            <span>Phn No. : 9878567465</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DeptPage