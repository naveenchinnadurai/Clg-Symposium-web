import React from 'react'
import { FaFacebookSquare as FB, FaInstagram as Insta } from 'react-icons/fa'
import { FiMail as Mail } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

export function Footer() {
  const path = useLocation()
  if (location.pathname === "/") {
    return null;
  }
  return (
    <footer className="flex justify-evenly flex-wrap py-1 container relative z-10 mx-auto px-2 pt-3 bg-opacity-40 bg-black rounded-t-3xl">
      <div className="w-fit p-2">
        <ul className="flex flex-wrap items-center gap-5">
          {
            [{ text: "Home", to: "/home" }, { text: "Our Website", to: "https://www.sect.edu.in/" }, { text: "Event Timeline", to: "/timeline" }].map((e, i) => {
              return (
                <li key={i} className="p-0">
                  <Link className="font-medium text-gray-400 hover:text-gray-700" target='__blank' to={e.to}> {e.text} </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="w-fit p-2 gap-3 flex flex-wrap items-center justify-center text-black">
        {
          [{ icon: <FB />, to: "#" }, { icon: <Insta />, to: "#" }, { icon: <Mail />, to: "#" }].map((e, i) => {
            return (
              <Link key={i} to={e.to} className="flex p-2 text-white text-xl items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                {e.icon}
              </Link>
            )
          })
        }
      </div>
    </footer>
  )
}

export default Footer
