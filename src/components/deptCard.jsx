import React from 'react'
import '../stylings/compoStyle/deptCard.css'
import { Link } from 'react-router-dom'

function DeptCard() {
  return (
    <div className='col align-center deptcard'>
        <div className="deptcard-img"></div>
        <h2 className="deptcard-title">CSE</h2>
        <p className='txt-align-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cumque. Veniam eligendi ipsa non qui.</p>
        <Link to='/deptpage' className='link-tag dept-link'>Know more</Link>
    </div>
  )
}

export default DeptCard