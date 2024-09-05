import img1 from '../assets/deptLogo/CSE.jpg'
import img2 from '../assets/deptLogo/ECE.jpg'
import img3 from '../assets/deptLogo/EEE.jpg'
import img4 from '../assets/deptLogo/Civil.jpeg'
import img5 from '../assets/deptLogo/Mech.jpeg'
import img6 from '../assets/deptLogo/MBA.jpeg'
import img7 from '../assets/deptLogo/MEE.jpeg'
import img8 from '../assets/deptLogo/Robotics.jpeg'
import img9 from '../assets/deptLogo/AI&DS.jpg'
import img10 from '../assets/deptLogo/IT.jpeg'
import img11 from  '../assets/deptLogo/cyberimg.webp'
import img12 from '../assets/deptLogo/pharm.logo.webp'

export const eventDetails=[
    {
        id:1,
        deptName:'Computer Science and Engineering',
        deptSpecialName:"ITrenders",
        img:img1,
        nameShort:'CSE',
        para:"CSE focuses on the study of computers, software, and computational processes. It covers a wide array of topics including programming, software engineering, algorithms, databases, networking, and artificial intelligence. Graduates typically pursue careers as software developers, data scientists, or system architects, working in various industries to create and manage complex software systems.",
        deptTxt1:'Join us for an inspiring day of innovation and learning at the CSE Symposium. Elevate your knowledge, connect with experts, and shape the future!',
        to:'/deptpage',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2024',
            time:'11:30AM',
            venue:'CSE lab-III,2nd floor,Main Block',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience Explore the future of technology '
            },
            coOrdinator:{
                name:'M.Navanedhan (st)CSE-IV yr',
                phn:9878567465
            }
        },
        event2:{
            eventTitle:'UI Design',
            generalInfo:[
                'This technical event aims to showcase participants creativity skills through UI design.',
                ' Participants are tasked with creating a poster based on a given theme within a specified time frame.',
                'Design must be initiate from a blank white page,no templates or applications like Canva allowed to use.',
                'Design tools such as Figma, Photoshop, Adobe Illustrator, etc., are permitted.',
                'Participants can choose to work on a mobile or laptop, and desktops can be provided upon request for their convenience.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'27/09/2023',
            time:'11.45 AM',
            venue:'CSE lab-I,1st floor,Main Block',
            extraInfo:{
                title:'Theme',
                txt:'Problem statement will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'K.Akash(st)CSE-Iv yr',
                phn:9345509223
            }
        },
        event3:{
            eventTitle:'Code Cracking',
            generalInfo:[
                "This technical event focuses on testing the coding knowledge of participants and consists of two rounds.",
                "In first round, each participant is given a set of programs with errors and instructed to debug the code within a specified time frame.",
                "Those who pass this round move on to the next stage.The final round comprises three problems and participants are required to solve any two of them. ",
                " Winners will be announced based on our evaluation criteria.",
                "Participant certificates will be provided to all participants."
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'21/09/2024',
            time:'10:30 AM',
            venue:'CSE lab-III,2nd floor,Main Block',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - Preliminary/ Debugging(20 mins)',
                txt2:'Round:2 - Coding Round(30 mins)'
            },
            coOrdinator:{
                name:'C.Naveen(st)CSE-IV yr',
                phn:8907663542
            }
        },
    },
    {
        id: 2,
        deptName: 'Electronics & Communication Engineering',
        nameShort: 'ECE',
        img: img2,
        to: '/deptpage',
        para:"ECE focuses on the design and development of electronic devices and communication systems. It includes the study of analog and digital communications, signal processing, and microelectronics. ECE graduates work on developing advanced communication systems, electronic devices, and integrated circuits that are essential in today’s connected world.",
        deptSpecialName: "Tragga Talenta",
        deptTxt1: 'Unlock the future of electronics at the ECE Symposium. Dive into innovations, network with visionaries, and shape tomorrows tech landscape',
        to: '/deptpage',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'ECE Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Any Topics as per your wish and convenience ,must be based on latest and trending technology'
            },
            coOrdinator: {
                name: 'S.Jana Tony(st)ECE-IV yr',
                phn: 9878567465
            }
        },
        event2: {
            eventTitle: 'Tricky Circuits',
            generalInfo: [
                'Participants can present their project paper individually or as a team.',
                'A PowerPoint presentation (PPT) on your project is an added advantage, and you are allowed to bring any necessary equipment.',
                'A project prototype is mandatory, and power supply will be provided if required.',
                'Any technical or innovative project is allowed.',
                'For any queries regarding the event, feel free to contact the coordinator.'
            ],

            txt1: 'A Team should consist of Maximum 2 members. ',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'ECE Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'Round:1 - Preliminary/ Debugging(20 mins)',
                txt2: 'Round:2 - Coding Round(30 mins)'
            },
            coOrdinator: {
                name: 'R.Manikandan(st)ECE-IV yr',
                phn: 8907663542
            }
        },
        event3: {
            eventTitle: 'Googler',
            generalInfo: [
                'The event consists of 3 challenging rounds designed to test your search and problem-solving skills.',
                'Participants must maintain silence throughout the event, and the use of mobile phones or any other electronic gadgets is strictly prohibited.',
                'Each round will progressively increase in difficulty, pushing your knowledge and resourcefulness.',
                'Be prepared to think quickly and accurately under time pressure.',
                'If you have any questions or concerns, please contact the event coordinator.'
            ],

            txt1: 'Team should consist of Maximum 2 members.',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'ECE  Block',
            extraInfo: {
                title: 'Theme',
                txt: 'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator: {
                name: 'ThamariSelvan(st)ECE-IV yr',
                phn: 7895642631
            }
        },
    },
    {
        id: 3,
        deptName: 'Information Technology',
        deptSpecialName: "Amaze-IT",
        nameShort: 'IT',
        img: img10,
        to: '/deptpage',
        para:"Information Technology focuses on the application and management of computing technologies to solve business and organizational problems. IT professionals are responsible for the development and maintenance of information systems, networking, cybersecurity, and database management. They ensure that technology infrastructure supports business needs effectively and securely.",
        deptTxt1: 'Step into the future of technology at the IT Symposium. Explore cutting-edge innovations, connect with industry leaders, and unlock endless possibilities!',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants can present their paper individually or with a team of up to 2 members.',
                'Topics should focus on innovative technical ideas, and papers must follow the IEEE format.',
                'The presentation should include a clear problem statement, methodology, results, and conclusion.',
                'Use of visual aids like slides is encouraged to enhance your presentation.',
                'A Q&A session will follow each presentation, where judges may ask questions to evaluate understanding.',
                'For any queries, feel free to contact the event coordinator.'
            ],
        
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'IT lab-I,1nd floor,IT Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Exploring innovative IT solutions for enhanced data security, efficient cloud computing, and the future of artificial intelligence.'
            },
            coOrdinator: {
                name: 'K.Senthilandavan(st)CSE-IV yr',
                phn: 9878567465
            }
        },
        event2: {
            eventTitle: 'Ad-Zap',
            generalInfo: [
                "Topics are given on the spot and 20 minutes time is given for preparation and every team has to present a 5-minute pitch on the stage. ",
                " In case participants exceed the time limit, judges will be free to disqualify the team. ",
                "Teams can choose different forms of expression like Role play, short skit, jingles, short talk or any other innovative form.(Only in English)",
                "Every Teams are allowed to bring the properties they need, Team which is not following the rules will be disqualified."
            ],
            txt1: 'Team should consist of 4 members',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'IT lab-I,1nd floor,IT Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'round-one',
                txt2: 'round-two'
            },
            coOrdinator: {
                name: 'Muneeswaran.S(st)IT-IV yr',
                phn: 8220723803
            }
        },
        event3: {
            eventTitle: 'Logo Contest',
            generalInfo: [
                'This technical event aims to showcase participants creativity skills through Logo design.',
                ' Participants are tasked with creating a Logo based on a given theme within a specified time frame.',
                'Design must be initiate from a blank white page,no templates or applications like Canva allowed to use.',
                'Design tools such as Figma, Photoshop, Adobe Illustrator, etc., are permitted.',
                'Participants can choose to work on a mobile or laptop, and desktops can be provided upon request for their convenience.'
            ],
            txt1: 'Indivual participation, no team participation allowed',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'IT lab-I,2nd floor,IT Block',
            extraInfo: {
                title: 'Theme',
                txt: 'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator: {
                name: 'Vijay.P(st)IT-IV yr',
                phn: 9345591399
            }
        },
    },
    
    {
        id:4,
        deptName:'Artificial Intelligence and Data Science',
        deptSpecialName:"Arti",
        img:img9,
        nameShort:'AI & DS',
        to:'/deptpage',
        para:"AIDS combines the study of artificial intelligence (AI) with data science to analyze and derive insights from large datasets. It involves machine learning, data mining, and statistical analysis to develop intelligent systems capable of making decisions. Professionals in this field work in various sectors, including technology, finance, healthcare, and marketing, where data-driven decision-making is crucial.",
        deptTxt1:'Merges AI and data science, preparing students for careers in innovation and problem-solving.',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2024',
            time:'12:30PM',
            venue:'AIDS lab-III,2nd floor,AIDS Block',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience'
            },
            coOrdinator:{
                name:'M.Dhanush Lakshman(st)CSE-IV yr',
                phn:9878567465
            }
        },
        event2:{
            eventTitle:'ProcodeX',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'21/09/2024',
            time:'10:30 AM',
            venue:'AIDS lab-III,2nd floor,AIDS Block',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - Preliminary/ Debugging(20 mins)',
                txt2:'Round:2 - Coding Round(30 mins)'
            },
            coOrdinator:{
                name:'B.Vijay(st) IV-AIDS',
                phn:8220723803
            }
        },
        event3:{
            eventTitle:'ForgeAI',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'21/09/2024',
            time:'11.45 AM',
            venue:'AIDS lab-III,2nd floor,AIDS Block',
            extraInfo:{
                title:'Theme',
                txt:'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'Saranraj(st) IV-AIDS',
                phn:9345591399
            }
        },
    },
    {
        id: 5,
        deptName: 'Civil Engineering',
        deptSpecialName: "Asthivara",
        img: img4,
        nameShort: 'Civil',
        to: '/deptpage',
        para:"Civil Engineering is dedicated to the design, construction, and maintenance of the built environment, including structures like buildings, bridges, and infrastructure systems. It combines principles of engineering with environmental considerations, aiming to create sustainable and resilient structures. Civil engineers play key roles in urban planning, environmental management, and structural design.",
        deptTxt1: 'Join us at the Civil Engineering Symposium, where innovation meets infrastructure. Connect with industry experts, explore groundbreaking projects, and shape the future of sustainable development!',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'Civil Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Any Topics as per your wish and convenience'
            },
            coOrdinator: {
                name: 'M.Dhanush Lakshman(st)CSE-III yr',
                phn: 9878567465
            }
        },
        event2: {
            eventTitle: 'Technical Quiz',
            generalInfo: [
                'Test your knowledge across various technical domains including computer science, electronics, and engineering.',
                'Participate individually or in teams of up to 4 members to tackle a series of challenging questions.',
                'The quiz format includes multiple-choice, true/false, and short-answer questions designed to challenge your technical expertise.',
                'Please refrain from using electronic devices or reference materials during the quiz to ensure a fair competition.',
                'Prepare for a dynamic and intellectually stimulating experience!',
                'For any questions or further details, please reach out to the event coordinator.'
            ],
            
            txt1: 'A Team can consist of maximum 3 memebers',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'Civil Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'Round:1 - ',
                txt2: 'Round:2 - '
            },
            coOrdinator: {
                name: 'Muneeswaran.S(st)IT-III yr',
                phn: 8220723803
            }
        },
        event3: {
            eventTitle: 'Technical Quiz',
            generalInfo: [
                'The quiz will test participants on a range of technical topics including engineering, technology, and science.',
                'Participants can compete individually or in teams of up to 4 members.',
                'The quiz will consist of multiple-choice questions, true/false questions, and short answers.',
                'Electronic devices and reference materials are not allowed during the quiz.',
                'Be prepared for a fast-paced and challenging experience!',
                'For any questions or additional information, please contact the event coordinator.'
            ],
            txt1: 'Indivual participation, no team participation allowed',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'Civil Block',
           
            coOrdinator: {
                name: 'Vijay.P(st)IT-III yr',
                phn: 9345591399
            }
        },
    },
    {
        id:6,
        deptName:'Mechanical Engineering ',
        deptSpecialName:"Gear Mech",
        nameShort:'MECH',
        img:img5,
        para:"Mechanical Engineering is the discipline that deals with the design, analysis, and manufacturing of mechanical systems. This includes everything from engines and machines to robots and thermal systems. Mechanical engineers work in diverse industries, including automotive, aerospace, and manufacturing, solving complex problems related to the mechanics and dynamics of physical systems.",
        to:'/deptpage',
        deptTxt1:'Covers mechanical systems, robotics, and manufacturing, driving advancements in key industries.',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2024',
            time:'11:30PM',
            venue:'Mech Lab , Mech Department',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience'
            },
            coOrdinator:{
                name:'Ariraj - IV , Mech',
                phn:9878567465
            }
        },
        event2:{
            eventTitle:'Quiz Master',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'21/09/2024',
            time:'10:30 AM',
            venue:'Mech Lab - Mechanical Department',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - Preliminary/ Debugging(20 mins)',
                txt2:'Round:2 - Coding Round(30 mins)'
            },
            coOrdinator:{
                name:'Sabarinathan - IV (Mech)',
                phn:8220723803
            }
        },
        event3:{
            eventTitle:'Audio Clipping',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'21/09/2024',
            time:'11.45 AM',
            venue:'Mech Lab - Mechanical Block',
            extraInfo:{
                title:'Theme',
                txt:'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'Vignesh-IV(Mechanical Department',
                phn:9345591399
            }
        },
    },
    {
        id: 7,
        deptName: 'Electrical and Electronic Engineering',
        deptSpecialName: "Lumin-US",
        nameShort: 'EEE',
        img: img3,
        to: '/deptpage',
        para:"EEE deals with the study and application of electricity, electronics, and electromagnetism. It covers power generation and distribution, electronic devices, and communication systems. Electrical engineers design, develop, and maintain electrical and electronic systems, working in industries like power generation, telecommunications, and consumer electronics.",
        deptTxt1: 'Join us at the Electrical and Electronics Engineering Symposium! Discover cutting-edge advancements, engage with leading experts, and explore innovative solutions shaping the future of technology',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'EEE Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Any Topics as per your wish and convenience'
            },
            coOrdinator: {
                name: 'M.Dhanush Lakshman(st)CSE-IV yr',
                phn: 9878567465
            }
        },
        event2: {
            eventTitle: 'Connexion',
            generalInfo: [
                'Showcase your innovative ideas and technical projects either individually or as a team.',
                'A PowerPoint presentation (PPT) supporting your project is encouraged. Bring any necessary equipment or materials for your demonstration.',
                'A functional prototype of your project is required. Power supply will be available if needed.',
                'Projects can span a range of technical fields, including electronics, computing, and communications.',
                'For any questions or further details, please contact the event coordinator.'
            ],

            txt1: 'A Team can consist of maximum 3 memebers',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'EEE Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'Round:1 - ',
                txt2: 'Round:2 - '
            },
            coOrdinator: {
                name: 'Muneeswaran.S(st)IT-IV yr',
                phn: 8220723803
            }
        },
        event3: {
            eventTitle: 'Just A Minute',
            generalInfo: [
                'Participants will have exactly one minute to deliver a concise and impactful presentation on their chosen topic.',
                'Visual aids such as PowerPoint slides are encouraged to enhance your presentation, but keep them brief and relevant.',
                'The focus is on clear and effective communication of ideas within the one-minute time limit.',
                'Prepare to present on any technical or innovative subject, highlighting key points efficiently.',
                'For any questions or additional information, please contact the event coordinator.'
            ],

            txt1: 'Indivual participation, no team participation allowed',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'CSE lab-I,1st floor,Main Block',
            extraInfo: {
                title: '',
                txt: ''
            },
            coOrdinator: {
                name: 'Vijay.P(st)IT-IV yr',
                phn: 9345591399
            }
        },
    },
    {
        id:8,
        deptName: 'Medical Electronics',
        deptSpecialName: "I AM",
        nameShort: 'MDE',
        img: img7,
        to: '/deptpage',
        para:"Medical Electronics integrates electronics with biomedical applications to design and develop medical devices and systems, such as pacemakers, imaging equipment, and diagnostic tools. This field combines engineering and healthcare, with professionals working to enhance medical technology and improve patient care.",
        deptTxt1: 'Join us at the Medical Electronics Engineering Symposium! Discover cutting-edge advancements, engage with leading experts, and explore innovative solutions shaping the future of technology',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'MDE Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Any Topics as per your wish and convenience'
            },
            coOrdinator: {
                name: 'M.KaviyaSri MDE-IV yr',
                phn: 7200849740
            }
        },
        event2: {
            eventTitle: 'Ad-Zap',
            generalInfo: [
                'Showcase your innovative ideas and technical projects either individually or as a team.',
                'A PowerPoint presentation (PPT) supporting your project is encouraged. Bring any necessary equipment or materials for your demonstration.',
                'A functional prototype of your project is required. Power supply will be available if needed.',
                'Projects can span a range of technical fields, including electronics, computing, and communications.',
                'For any questions or further details, please contact the event coordinator.'
            ],

            txt1: 'A Team can consist of maximum 3 memebers',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'EEE Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'Round:1 - ',
                txt2: 'Round:2 - '
            },
            coOrdinator: {
                name: 'Siwani - MDE(IV-year)',
                phn: 8220723803
            }
        },
        event3: {
            eventTitle: 'Project Contest',
            generalInfo: [
                'Participants will have exactly one minute to deliver a concise and impactful presentation on their chosen topic.',
                'Visual aids such as PowerPoint slides are encouraged to enhance your presentation, but keep them brief and relevant.',
                'The focus is on clear and effective communication of ideas within the one-minute time limit.',
                'Prepare to present on any technical or innovative subject, highlighting key points efficiently.',
                'For any questions or additional information, please contact the event coordinator.'
            ],

            txt1: 'Indivual participation, no team participation allowed',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'CSE lab-I,1st floor,Main Block',
            extraInfo: {
                title: '',
                txt: ''
            },
            coOrdinator: {
                name: 'Naresh Balaji-(MDE-Final year)',
                phn: 9345591399
            }
        },
    },
    {
        id: 9,
        deptName: 'Robotics and Automation',
        deptSpecialName: "Roam",
        img: img8,
        para:"Robotics and Automation focuses on the design, construction, and programming of robots and automated systems. It involves a multidisciplinary approach, combining mechanical engineering, electronics, and computer science. Engineers in this field develop robots and systems that automate tasks, improving efficiency in industries like manufacturing, healthcare, and logistics.",
        nameShort: 'ROAM',
        to: '/deptpage',
        deptTxt1: 'Join us at the MBA Symposium, where business leaders and aspiring entrepreneurs converge. Explore transformative business strategies, gain insights from industry experts, and network with peers to drive your career forward!',
        event1: {
            eventTitle: 'Paper Presentation',
            generalInfo: [
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1: 'Last date for paper Submission:13/09/2024',
            date: '20/09/2024',
            time: '11:30PM',
            venue: 'MBA Block',
            extraInfo: {
                title: 'Topics',
                txt: 'Any Topics as per your wish and convenience'
            },
            coOrdinator: {
                name: 'M.Dhanush Lakshman(st)CSE-IV yr',
                phn: 9878567465
            }
        },
        event2: {
            eventTitle: 'Robo War',
            generalInfo: [
                'Teams will compete in a robot combat challenge, where their robots will battle in a designated arena.',
                'Participants must design and build their robots according to the competition rules and specifications.',
                'A PowerPoint presentation (PPT) outlining your robots design and strategy is encouraged but not mandatory.',
                'Bring any necessary tools and equipment for robot maintenance and adjustments. Power supply will be provided if needed.',
                'Ensure your robot adheres to the competition guidelines for size, weight, and safety.',
                'For any questions or additional details, please contact the event coordinator.'
            ],
            
            txt1: 'A Team can consist of maximum 3 memebers',
            date: '21/09/2024',
            time: '10:30 AM',
            venue: 'Robotics lab-III,2nd floor,IT Block',
            extraInfo: {
                title: 'Rounds:',
                txt1: 'Round:1 - ',
                txt2: 'Round:2 - '
            },
            coOrdinator: {
                name: 'Muneeswaran.S(st)IT-III yr',
                phn: 8220723803
            }
        },
        event3: {
            eventTitle: 'Robo Quiz',
            generalInfo: [
                'Test your knowledge on robotics, automation, and related technologies in this engaging quiz competition.',
                'Participants can compete individually or in teams of up to 4 members.',
                'The quiz will cover various aspects of robotics, including design principles, famous robots, and recent advancements.',
                'No additional equipment or presentations are needed; focus on your knowledge and quick thinking.',
                'Be prepared for a fast-paced and challenging experience!',
                'For any questions or further information, please contact the event coordinator.'
            ],
            
            txt1: 'Indivual participation, no team participation allowed',
            date: '21/09/2024',
            time: '11.45 AM',
            venue: 'Robatics lab-I,1st floor,IT Block',
            extraInfo: {
                title: 'Theme',
                txt: 'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator: {
                name: 'Vijay.P(st)IT-III yr',
                phn: 9345591399
            }
        },
    },
    {
        id:10,
        deptName:'Management of Business Administration',
        deptSpecialName:"AIMS",
        nameShort:'MBA',
        img:img6,
        to:'/deptpage',
        para:"The MBA program provides advanced education in business management and administration, covering areas like finance, marketing, operations, and strategic management. It equips students with the skills needed for leadership and managerial roles across various industries, preparing them to make strategic decisions, manage teams, and drive business growth",
        deptTxt1:'Equips graduates with strategic management skills for leadership in global business environments.',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2024',
            time:'12:30PM',
            venue:'MBA Lab - MBA Department',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience'
            },
            coOrdinator:{
                name:'A.Nagarai-II(MBA)',
                phn:9878567465
            }
        },
        event2:{
            eventTitle:'Quiz Buzz',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'21/09/2024',
            time:'10:30 AM',
            venue:'MBA Lab - MBA Department',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - Preliminary/ Debugging(20 mins)',
                txt2:'Round:2 - Coding Round(30 mins)'
            },
            coOrdinator:{
                name:'Muneeswaran.S(st)IT-III yr',
                phn:8220723803
            }
        },
        event3:{
            eventTitle:'Best Manager',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'21/09/2024',
            time:'11.45 AM',
            venue:'MBA Lab - MBA Department',
            extraInfo:{
                title:'Theme',
                txt:'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'Vijay.P(st)IT-III yr',
                phn:9345591399
            }
        },
    },
    {
        id:11,
        deptName:'Cyber Security',
        deptSpecialName:"Cyborg",
        nameShort:'CSE(CS)',
        img:img11,
        to:'/deptpage',
        para:"Computer Science (Cyber Security) focuses on protecting systems and data from cyber threats. It covers encryption, ethical hacking, and network security, preparing graduates for roles as cybersecurity analysts and security consultants, essential for safeguarding digital assets.",
        deptTxt1:' Specializes in cybersecurity, equipping students to protect digital assets across industries..',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2023',
            time:'11:30PM',
            venue:'CSE lab-I,1nd floor,CSE Block',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience'
            },
            coOrdinator:{
                name:'D.Dharan',
                phn:9878567465
            }
        },
        event2:{
            eventTitle:'Hack now',
            generalInfo:[
                ' A fast-paced coding challenge to innovate and build solutions in real-time.'
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'21/09/2024',
            time:'10:30 AM',
            venue:'CSE lab-III,2nd floor,Main Block',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - ',
                txt2:'Round:2 - C'
            },
            coOrdinator:{
                name:'Elamaran',
                phn:8220723803
            }
        },
        event3:{
            eventTitle:'Cyber Quiz',
            generalInfo:[
                'Test your digital skills and become a cyber-savvy website updater!.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'21/09/2023',
            time:'11.45 AM',
            venue:'CSE lab-I,1st floor,Main Block',
            extraInfo:{
                title:'Theme',
                txt:'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'Deepak - III(CS)',
                phn:9345591399
            }
        },
    },
    {
        id:12,
        deptName:'Pharmaceuticl Technology',
        deptSpecialName:"Pharmkon",
        nameShort:'Pharm Tech',
        img:img12,
        para:"Pharmaceutical Technology applies engineering principles to the development and manufacturing of pharmaceutical products. It involves drug formulation, production, and quality control, ensuring that medications are safe and effective. Professionals in this field work in the pharmaceutical industry, contributing to drug development and the manufacturing processes that bring new treatments to market.",
        to:'/deptpage',
        deptTxt1:'Advances drug development with expertise in biochemistry, pharmacology, and industry processes.',
        event1:{
            eventTitle:'Paper Presentation',
            generalInfo:[
                'Participants are allowed to present their paper individually or with their team mates.',
                'Topics should be based on any technical ideas and  Paper should be in the IEEE format.',
                'If you have any queries about the event,feel free to contact the co-ordinator.',
                'Team should consist of Maximum 2 members.'
            ],
            txt1:'Last date for paper Submission:13/09/2024',
            date:'20/09/2024',
            time:'11:30PM',
            venue:'Pharm lab-I,1nd floor,Main Block',
            extraInfo:{
                title:'Topics',
                txt:'Any Topics as per your wish and convenience'
            },
            coOrdinator:{
                name:'G.Karthikeyan(st) III-Pharm',
                phn:8778401490
            }
        },
        event2:{
            eventTitle:'Pharma Technical Quiz',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'A Team can consist of maximum 3 memebers',
            date:'27/09/2023',
            time:'10:30 AM',
            venue:'Pharm lab-I,1nd floor,Main Block',
            extraInfo:{
                title:'Rounds:',
                txt1:'Round:1 - ',
                txt2:'Round:2 - '
            },
            coOrdinator:{
                name:'G.karthikeyan(st)Pharm-III yr',
                phn:8220723803
            }
        },
        event3:{
            eventTitle:'Pharma Technology',
            generalInfo:[
                'Participants are allowed to present their project paper individually or with their team mates.',
                'If you have a PPT on you project is a added advantage and are allowed to bring the properties or equipment you need.',
                'Project proto type is mandatory and power will be supply is provided if necessary ',
                'Any Technical or innovative project can allowed',
                'If you have any query regarding the event,feel free to contact the co-ordinator.'
            ],
            txt1:'Indivual participation, no team participation allowed',
            date:'21/09/2024',
            time:'11.45 AM',
            venue:'Pharm lab-I,1st floor,Main Block',
            extraInfo:{
                title:'Theme',
                txt:'Theme will be announced on the spot, can use any type design tools.'
            },
            coOrdinator:{
                name:'G.Karthikeyan',
                phn:9345591399
            }
        },
    }
]