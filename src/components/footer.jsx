import React from 'react'
import '../stylings/compoStyle/footer.css'
import qr from '../assets/registrationQr.jpg'
import { FaInstagram as Insta, FaFacebookSquare as FB } from 'react-icons/fa'
import { FiMail as Mail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='col align-center footer'>
      <div className="row justify-se  footer-div">
        <div className="col footer-div-1">
          <h2 className='footer-head'>SENGUNTHAR ENGINEERING COLLEGE</h2>
          <div className="row justify-sb footer-icons">
            <span><Insta /></span>
            <span><FB /></span>
            <span><Mail /></span>
          </div>
        </div>
        <div className="col align-start footer-div-2">
          <Link className='link-tag'>Home</Link>
          <Link className='link-tag'>Departments</Link>
          <Link className='link-tag'>About</Link>
          <Link className='link-tag'>Contact</Link>
        </div>
        <div className="col align-center footer-div-3">
          <div className="row justify-center footer-img-div">
            <img src={qr} alt="registration QR" className='qr-img' />
          </div>
          <p>Register Now to Particate </p>
        </div>
      </div>
      <p>&copy;All copyrights reserved for SEC</p>
    </div>

  )
}

export default Footer