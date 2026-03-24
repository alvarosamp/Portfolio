"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative flex items-center justify-center w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
            {/* SVG círculo animado */}
            <motion.svg
                className="absolute top-0 left-0 w-full h-full z-10"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: [
                            "15 120 25 25",
                            "16 25 92 72",
                            "4 250 22 22"
                        ],
                        rotate: [120, 360],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
            {/* Foto */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
                className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] z-20"
            >
                <Image
                    src="/assets/assets/photo.jpeg"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain"
                />
            </motion.div>
        </div>
    );
};

export default Photo;