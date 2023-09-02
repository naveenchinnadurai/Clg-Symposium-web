import React from 'react'
import '../stylings/pageStyle/intro.css'
import MovingText from 'react-moving-text'
import { Link } from 'react-router-dom'
import {IoWarningOutline as Warn} from 'react-icons/io5'

function Intro() {
    return (
        <div className='col  align-center intro-div'>
            <MovingText
                type="fadeIn"
                duration="7000ms"
                delay="0"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
                className="col align-center intro-txt-animation"
            >
                <h1 className='intro-clg-name'>Sengunthar Engineering College</h1>
                <h1 className='intro-txt-2'>(Autonomous)</h1>
                <span>Organizes National level Students Technical Symposium</span>
                <Link to='/home' className='intro-btn'>Know More</Link>
            </MovingText>
            <p className='intro-para'><Warn/> If 404 error occurs, close all tabs and try again</p>
        </div>
    )
}
export default Intro