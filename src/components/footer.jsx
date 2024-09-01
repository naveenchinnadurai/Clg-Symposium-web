import React from 'react'
import qr from '../assets/registrationQr.jpg'
import { FaInstagram as Insta, FaFacebookSquare as FB } from 'react-icons/fa'
import { FiMail as Mail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
function Footer() {
  return (
    <div className='bg-slate-500'>
      <div className="flex justify-evenly">
        <div className="flex flex-col justify-evenly">
          <h2 className='text-2xl font-serif'  >SENGUNTHAR ENGINEERING COLLEGE</h2>
          <div className="flex justify-evenly text-3xl" >
            <Link to={'https://www.instagram.com/sengunthar_t.gode/'} className='hover:text-blue-400'><Insta /></Link>
            <Link className='hover:text-blue-400'><FB /></Link>
            <Link className='hover:text-blue-400'><Mail /></Link>
          </div>
        </div>
        <div className="flex flex-col justify-evenly ">
          <Link className='hover:text-blue-400' to='/home'>Home</Link>
          <Link className='hover:text-blue-400'>Contact</Link>
          <ScrollLink to='about' smooth={true} className='hover:text-blue-400' duration={3000}>Welcome</ScrollLink>
          <ScrollLink className='hover:text-blue-400' smooth={true} to='dept-nav-head' duration={3000}>Departments</ScrollLink>
        </div>
          <div className=" flex flex-col gap-2 justify-center">
            <Link className='' to='https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform'>
              <img src={qr} alt="registration QR" className='rounded-lg w-32' />
            </Link>
            <p>Register Now to Particate </p>
          </div>
      </div>
      <p className='flex justify-center mt-3'>&copy;All copyrights reserved for SEC-2023</p>
    </div>

  )
}

export default Footer