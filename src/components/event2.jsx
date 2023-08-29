import React from 'react'

function Event2Section() {
    return (
        <div className="txt-align-left event-details-div 2nd-event ">
            <h2>Code Cracking</h2>
            <div className="row justify-sb ppt-main-div">
                <div className="ppt-div-1">
                    <h3>General Instructions</h3>
                    <p>nemo at ad voluptatum consectetur culpa delectus explicabo quam non sed laborum. Aliquid commodi ad quis natus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, vero.</p>
                    <p className='ppt-date'>A Team can consist of 3 memebers</p>
                    <div className="event-time">
                        <span>Date:27/09/2023</span>
                        <span>Time: 10:30AM</span>
                        <p>Venue: CSE lab-III,2nd floor,Main Block</p>
                    </div>
                </div>
                <div className="ppt-div-2">
                    <h4>Rounds:</h4>
                    <p>Round:1-Primilinary/ Debugging(20 mins)</p>
                    <p>Round:2-Coding Round(30 mins)</p>
                </div>
            </div>
            <div className="col event-incharge-details">
                <h4>Event Co-ordinator:</h4>
                <span>Name: R.Manikandan(st)CSE-III yr</span>
                <span>Phn No. : 8907663542</span>
            </div>
        </div>
    )
}

export default Event2Section