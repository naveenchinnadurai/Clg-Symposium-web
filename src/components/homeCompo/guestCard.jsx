import '../../stylings/compoStyle/homeStyles/guest.css'
import React from 'react'

function GuestCard(props) {
    return (
        <div className="col justify-center align-center guest-card" key={props.key}>
            <div className="guest-img">
                <img src={props.img} alt="props.name" />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.role1}</h3>
            <h4>{props.role}</h4>
        </div>
    )
}

export default GuestCard