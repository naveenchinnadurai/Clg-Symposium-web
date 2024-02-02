import React from 'react'
import '../../stylings/compoStyle/homeStyles/contact.css'
import { FaPhoneVolume as Phone } from "react-icons/fa6";
import { FaInstagram as Insta } from "react-icons/fa";
import { LuMailOpen as Mail} from "react-icons/lu";
function Contact() {
    return (
        <div className='row contact-main-div'>
            <div className="col align-center contact-text">
                <h1>Contact us</h1>
                <div className="col contact-inputs">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='E-mail' />
                    <input type="text" placeholder='Phone No.' />
                </div>
                <span>Send</span>
                <div className='row justify-se contact-card-div'>
                    {
                        contactInfo.map((e)=>{
                            return(
                                <ContactCard 
                                    icon={e.icon}
                                    title={e.title}
                                    text={e.text}
                                    key={e.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="contact-map"></div>
        </div>
    )
}
const contactInfo=[
    {
        id:1,
        icon:<Phone/>,
        title:'Phone',
        text:'+123 435 12'
    },
    {
        id:2,
        icon:<Mail/>,
        title:'E-Mail',
        text:'sectrichengode@secteg.co.in'
    }
]
function ContactCard(props) {
    return(
        <div className="row align-center contactCard" key={props.key}>
            <span>{props.icon}</span>
            <div className='col justify-center'>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Contact
