import React from 'react'
import { motion } from 'framer-motion';

const mobileNav = ({ title }) => {

    const mobileNavLinks = {
        intial: {
            y: "8vh",
            transition: {
                duration: 0.8,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            },
        },
        exit: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.div
            variants={mobileNavLinks}
            className="overflow-hidden ml-10 w-[70%] sm:w-[80%] text-[#f6f6f6c4] hover:text-[#F6F6F6] border-b border-[#121212] hover:border-[#f6f6f654] text-2xl sm:text-3xl sm:pb-5 font-[300] leading-[160%] tracking-[0.7px] transition-all duration-500" onClick={() => setNavbarOpen((prev) => !prev)}
        >
            {title}
        </motion.div>
    );
}

export default mobileNav
