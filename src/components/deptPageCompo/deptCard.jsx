import React from 'react'
import '../../stylings/compoStyle/deptPageStyles/deptCard.css'

import { Link } from 'react-router-dom'

function DeptCard(props) {
  const dept=props.deptment;
  const setDeptInfo =()=>{
    document.cookie = JSON.stringify(dept)
  }
  return (
    <div className='col align-center deptcard' data-aos="zoom-in-up" data-aos-offset="1" data-aos-duration='2s'>
        <div className="deptcard-img"></div>
        <h2 className="deptcard-title">{dept.nameShort}</h2>
        <p className='txt-align-center'>{dept.deptTxt1}</p>
        <Link to='/deptpage' onClick={setDeptInfo} className='link-tag dept-link'>know more</Link>
    </div>
  )
}

export default DeptCard