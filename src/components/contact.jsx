import React from 'react';
import { FaPhoneVolume as Phone } from 'react-icons/fa6';
import { FaInstagram as Insta } from 'react-icons/fa';
import { LuMailOpen as Mail } from 'react-icons/lu';

function Contact() {
    return (
        <div className="flex flex-col md:flex-row bg-purple-600 w-4/5 mx-auto my-5 mb-12 p-5 items-center justify-center relative">
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-5 gap-3">
                <h1 className="text-3xl font-semibold text-white mb-4">Contact us</h1>
                <div className="flex flex-col w-11/12 md:w-3/4 gap-4 mb-4">
                    <input type="text" placeholder="Name" className="p-3 border-none rounded-md outline-none" />
                    <input type="text" placeholder="E-mail" className="p-3 border-none rounded-md outline-none" />
                    <input type="text" placeholder="Phone No." className="p-3 border-none rounded-md outline-none" />
                </div>
                <span className="bg-purple-800 text-white rounded-lg px-10 py-2">Send</span>
                <div className="flex flex-wrap gap-4 w-full">
                    {contactInfo.map((e) => (
                        <ContactCard
                            key={e.id}
                            icon={e.icon}
                            title={e.title}
                            text={e.text}
                            className="flex-1"
                        />
                    ))}
                </div>
            </div>
            <div className="bg-[#370076] w-full md:w-1/2 h-80 md:h-64"></div>
        </div>
    );
}

const contactInfo = [
    {
        id: 1,
        icon: <Phone />,
        title: 'Phone',
        text: '+123 435 12'
    },
    {
        id: 2,
        icon: <Mail />,
        title: 'E-Mail',
        text: 'sectrichengode@secteg.co.in'
    }
];

function ContactCard(props) {
    return (
        <div className={`flex items-center gap-4 p-2 ${props.className}`}>
            <span className="text-2xl">{props.icon}</span>
            <div className="flex flex-col">
                <h4 className="text-lg font-semibold">{props.title}</h4>
                <p className="text-sm">{props.text}</p>
            </div>
        </div>
    );
}

export default Contact;
