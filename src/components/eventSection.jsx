import React from 'react'
import '../stylings/compoStyle/ppt.css'
function EventSection(props) {
    return (
        <div className="txt-align-left event-details-div">
            <h2>{props.eventName}</h2>
            <div className="row justify-sb ppt-main-div">
                <div className="ppt-div-1">
                    <h3>General Instructions</h3>
                    <p>{props.eventInfo}</p>
                    <p className='ppt-date'>{props.eventTxt}</p>
                    <div className="event-time">
                        <span>Date: {props.date}</span>
                        <span>Time: {props.time}</span>
                        <p>Venue: {props.venue}</p>
                    </div>
                </div>
                <div className="ppt-div-2">
                    <h4>{props.title2}</h4>
                    <p>{props.eventInfo1}</p>
                    <p>{props.eventInfo2}</p>
                </div>
            </div>
            <div className="col event-incharge-details">
                <h4>Event Co-Ordinator:</h4>
                <span>Name : {props.coOrdinatorName}</span>
                <span>Phn No. : {props.coOrdinatorPhn}</span>
            </div>
        </div>
    )
}

export default EventSection