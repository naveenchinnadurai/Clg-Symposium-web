import React from 'react';
import { FaPhoneVolume as Phone } from 'react-icons/fa6';
import { FaInstagram as Insta } from 'react-icons/fa';
import { LuMailOpen as Mail } from 'react-icons/lu';

function Contact() {
    return (
        <div className="flex flex-col md:flex-row bg-purple-600 w-4/5 md:w-5/6 mx-auto p-5 !py-10 items-center justify-center relative">
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-5 gap-3">
                <h1 className="text-3xl font-semibold text-white mb-4">Contact us</h1>
                <div className="flex flex-col items-center gap-4 w-full">
                    {contactInfo.map((e) => (
                        <div className='flex items-center gap-4 p-2'>
                            <span className="text-2xl">{e.icon}</span>
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold">{e.title}</h4>
                                <p className="text-sm">{e.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 h-80 md:h-80">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.883955218857!2d77.92316601001714!3d11.377292847777893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba961e2d0c30a2f%3A0xbfda40155b105c6!2sSengunthar%20Engineering%20College%20(Autonomous)!5e1!3m2!1sen!2sin!4v1725200907862!5m2!1sen!2sin"
                    allowFullscreen=""
                    loading="lazy"
                    className='w-full h-full'
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>
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

export default Contact;
