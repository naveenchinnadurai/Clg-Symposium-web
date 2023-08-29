import React from 'react'
import '../stylings/compoStyle/ppt.css'
function PPtSection() {
    return (
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
                        <p>Venue: CSE lab-I,1st floor,Main Block</p>
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
    )
}

export default PPtSection