import React from 'react'
import '../stylings/compoStyle/deptCard.css'
import { Link } from 'react-router-dom'
import DeptPage from '../pages/deptPage'

function DeptCard(props) {
  const dept=props.deptment;
  return (
    <div className='col align-center deptcard' data-aos="zoom-in-up" data-aos-offset="1" data-aos-duration='2s'>
        <div className="deptcard-img"></div>
        <h2 className="deptcard-title">{props.name}</h2>
        <p className='txt-align-center'>{props.txt}</p>
        <Link to='/deptpage' className='link-tag dept-link'>know more</Link>
    </div>
  )
}

export default DeptCard