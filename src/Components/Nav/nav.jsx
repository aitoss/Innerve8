import React, { useState } from 'react';
import Btn from '../Button/btn';
import { motion } from 'framer-motion';
import MobileNav from './mobileNav';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsMeta } from "react-icons/bs";

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const onClick = () => {
        setNavbarOpen(false)
    };

    const containervars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
        open: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
    };

    return (
        <>
            <div className="inner-nav">
                <ul className={`menu-nav ${navbarOpen ? ' show-menu' : ''}`}>
                    <div className="menu-nav-header w-full flex flow-col items-center justify-between py-6 px-5 sm:px-10">
                        <a className="ml-[3.5rem] sm:ml-10 md:ml-20 text-2xl font-[300] text-[#c4c4c4bf] hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all" href='https://drive.google.com/file/d/1x4MOfC9sVzDxaOhnl3jdXOkCR96weMlA/view?usp=drive_link' target='_blank'>Brochure ↗</a>
                        <div onClick={() => setNavbarOpen((prev) => !prev)} >
                            <Btn mode="dark" name="Close" icon="×" />
                        </div>
                    </div>
                    <div className="menu-nav-items flex flex-col gap-5 sm:gap-7 md:ml-20  ml-10 pt-32 sm:pt-32">
                        <motion.a
                            href='#'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                            exit="exit"
                            onClick={()=> onClick}
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="HOME"  />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#prizes'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                            onClick={()=> onClick}
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="PRIZES" />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#problem'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                            onClick={()=> onClick}
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="SPONSORS' STATEMENT" />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#tracks'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="TRACKS" />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#timeline'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                            onClick={()=> onClick}
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="TIMELINE" />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#sponsors'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="SPONSORS" />
                            </div>
                        </motion.a>

                        <motion.a
                            href='#faqs'
                            variants={containervars}
                            initial="intial"
                            animate="open"
                        >
                            <div className="overflow-hidden" onClick={() => setNavbarOpen((prev) => !prev)}>
                                <MobileNav title="FAQs" />
                            </div>
                        </motion.a>
                    </div>
                    <div className="menu-nav-footer mb-20 md:pl-20 pl-10">
                        <div className="socials-list flex flow-col gap-5 pl-10 max-[525px]:flex-col">
                            {/* <a href='https://instagram.com/oss_club_ait' target='_blank'>Instagram <span className='text-xl'>↗</span></a>
                            <a href='' target='_blank'>Facebook <span className='text-xl'>↗</span></a>
                            <a href='' target='_blank'>Twitter <span className='text-xl'>↗</span></a> */}
                            <a href='https://instagram.com/oss_club_ait' target='_blank'>
                                <div className="Instagram group flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center  h-6 w-6 p-[0.1rem]  bg-[#212121] rounded-[0.375rem] hover:cursor-pointer">
                                    <FaInstagram className="no-underline hover:text-white text-xl"/>

                                    </div>
                                    <p className=" group text-lg text-[#c4c4c4bf] hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all">Instagram ↗</p>
                                </div>
                            </a>
                            <a href='https://twitter.com/innerve_8' target='_blank'>
                                <div className="twitter flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center h-6 w-6 p-[0.1rem] sm:p-[0.1rem] bg-[#212121] rounded-[0.375rem]">
                                    <BsTwitterX className="no-underline hover:text-white text-[18px]"/>
                                    </div>
                                    <p className="text-[#c4c4c4bf] text-lg hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all">Twitter ↗</p>
                                </div>
                            </a>
                            <a href='https://www.facebook.com/ossclubait' target='_blank'>
                                <div className="twitter flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center  h-6 w-6 p-[0.1rem] bg-[#212121] rounded-[0.375rem]">
                                    <BsMeta className="no-underline hover:text-white text-[18px]"/>
                                    </div>
                                    <p className="text-[#c4c4c4bf] text-lg hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all">Facebook ↗</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="w-screen max-w-[1540px] px-5 py-6 flex flex-row justify-between sm:px-12 ">
                    <a href="#" className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="40" viewBox="0 0 19 40" fill="none">
                            <path d="M5.57422 0.655886V13.2C5.60196 13.5323 5.89044 14.0972 6.82248 13.6984C7.75451 13.2997 14.2566 9.37859 17.3911 7.4679C17.7239 7.30176 18.19 6.85316 17.3911 6.38795C16.5922 5.92274 9.84604 2.04044 6.57283 0.157446C6.23996 -0.0363921 5.57422 -0.208077 5.57422 0.655886Z" fill="#212121" />
                            <path d="M18.5728 26.7107C18.5728 28.5683 17.883 31.5379 17.2727 32.2578C14.3927 36.8714 9.16352 38.9672 7.48717 39.6391C7.3237 39.7046 7.194 39.7565 7.10356 39.796C6.03715 40.2612 5.68168 39.8237 5.59281 39.5468L5.57425 25.3699L0.514625 22.3908C-0.417411 21.9921 0.126277 21.5047 0.514625 21.3109C5.81281 18.1818 16.6089 11.824 17.4078 11.4252C18.2067 11.0265 18.5173 11.7021 18.5728 12.0898V26.7107Z" fill="#212121" />
                        </svg>
                        <h1 className="text-[#212121] text-2xl font-[400]">Innerve</h1>
                    </a>
                    <div onClick={() => setNavbarOpen((prev) => !prev)} >
                        <Btn name="Menu" icon="↗" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
