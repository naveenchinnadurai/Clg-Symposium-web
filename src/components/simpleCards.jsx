import React from 'react'
import '../stylings/compoStyle/card.css'
import { cardDetails } from '../scripts/cardInfo'
function SimpleCards() {
    const displayCard = cardDetails.map((card) => {
        const Icon=card.icon
        return (
            <div className="card" key={card.id} id={card.id}>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <p>{card.content1}</p>
            </div>
        )
    })
    return (
        <div className='card-div row'>{displayCard}</div>
    )
}

export default SimpleCards