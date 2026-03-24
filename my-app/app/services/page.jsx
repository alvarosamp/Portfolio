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
            <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easyIn "}}} >
                {services.map((service, index) => {
                    return <div key={index}>
                        <div></div>
                        
                    </div>
                
                })}
            </motion.div> 
        </div>
    </section>
    );
};

export default Services;