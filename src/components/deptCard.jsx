import React from 'react'
import '../stylings/compoStyle/deptCard.css'
import { Link } from 'react-router-dom'
import DeptPage from '../pages/deptPage'

function DeptCard(props) {

  return (
    <div className='col align-center deptcard'>
        <div className="deptcard-img"></div>
        <h2 className="deptcard-title">{props.name}</h2>
        <p className='txt-align-center'>{props.txt}</p>
        <Link to='/deptpage' className='link-tag dept-link'>View more</Link>
    </div>
  )
}

export default DeptCard