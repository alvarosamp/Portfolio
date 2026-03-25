"use client";
import {BsArrowDownRight} from "react-icons/bs";
import {motion} from "framer-motion";
import Link from "next/link";

import { title } from "process";


const services = [
    {
        num :'01',
        title: 'Web Development',
        description: 'I create responsive and visually appealing websites using modern technologies like React, Next.js, and Tailwind CSS.',
        href: ""
    },
    {
        num :'02',
        title: 'Machine learning for anomaly pred detection',
        description: 'I use machine learning algorithms to detect anomalies in data patterns and behaviors.',
        href: ""
    },
    {
        num :'03',
        title: 'Deep Learning for image classification',
        description: 'I use deep learning techniques to classify images and recognize patterns in visual data.',
        href: ""
    },
    {
        num :'04',
        title: 'MlOps',
        description: 'I implement and manage machine learning operations to streamline the deployment and monitoring of ML models.',
        href: ""
    },
];
const Services = () =>{
    return(
    <section className = "min-h-[80vh] flex flex-col justify-center py-12 xl:py-0" >
        <div className= "container mx-auto">
            <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easyIn "}}} 
            className = 'grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {services.map((service, index) => {
                    return <div key={index} className = 'flex-1 flex flex-col justify-center gap-8 group p-6 md:p-8 min-h-[220px] md:min-h-[260px] rounded-lg'>
                    {/* top */}
                        <div className = 'w-full flex justify-between items-center'>
                            <div className = 'text-6xl md:text-7xl font-extrabold text-outline text-transparent'>{service.num}</div>
                            <Link href ={service.href}>
                                <BsArrowDownRight />
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-2xl md:text-3xl font-semibold">{service.title}</h2>
                        {/* description */}
                        <p className="text-base md:text-lg max-w-xl">{service.description}</p>
                        {/* border */}
                        <div className = 'border-b border-white/20 w-full'></div>                       
                    </div>              
                })}
            </motion.div> 
        </div>
    </section>
    );
};

export default Services;