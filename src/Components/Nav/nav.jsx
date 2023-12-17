import React, { useState } from 'react';
import Btn from '../Button/btn';
import { motion } from 'framer-motion';
import MobileNav from './mobileNav';
import './Nav.css';
import { Link } from 'react-router-dom';

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
                        <a className="ml-[3.5rem] sm:ml-10 md:ml-20 text-2xl font-[300] text-[#c4c4c4bf] hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all" href='https://drive.google.com/file/d/1-Xdhdc8jOhWg5IWhJlM0NP4rfFcWWP3_/view?usp=sharing' target='_blank'>Brochure ↗</a>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" fill="rgba(246,246,246,0.6823529411764706)"></path>
                                        </svg>

                                    </div>
                                    <p className=" group text-lg text-[#c4c4c4bf] hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all">Instagram ↗</p>
                                </div>
                            </a>
                            <a href='https://twitter.com/innervehack' target='_blank'>
                                <div className="twitter flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center h-6 w-6 p-[0.1rem] sm:p-[0.1rem] bg-[#212121] rounded-[0.375rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="#f6f6f6ae" ></path>
                                        </svg>
                                    </div>
                                    <p className="text-[#c4c4c4bf] text-lg hover:text-[#f6f6f6d4] hover:cursor-pointer transition-all">Twitter ↗</p>
                                </div>
                            </a>
                            <a href='https://www.facebook.com/innerve7.0' target='_blank'>
                                <div className="twitter flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center  h-6 w-6 p-[0.1rem] bg-[#212121] rounded-[0.375rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.9744 16.1635C20.6888 17.0545 20.199 17.5 19.5048 17.5C18.6273 17.5 17.7647 16.9735 16.917 15.9206C16.3283 15.1893 15.5026 13.7996 14.44 11.7515C13.984 10.8723 13.5611 10.0959 13.1714 9.42225C13.4809 8.93372 13.757 8.54177 13.9998 8.24641C14.957 7.08214 15.9587 6.5 17.0048 6.5C17.8397 6.5 18.635 7.03584 19.3907 8.10753C20.1673 9.20896 20.7114 10.5694 21.0228 12.1888C21.3292 13.782 21.3131 15.1069 20.9744 16.1635ZM12.0049 11.4296C12.2149 11.8151 12.4349 12.2294 12.6647 12.6725C13.7887 14.839 14.6869 16.3397 15.3591 17.1748C16.6071 18.7249 17.989 19.5 19.5048 19.5C20.3608 19.5 21.0931 19.2297 21.7019 18.6892C22.2267 18.2233 22.6191 17.5849 22.879 16.774C23.3216 15.3931 23.3576 13.7388 22.9868 11.8112C22.6212 9.90978 21.9673 8.29105 21.0252 6.95497C19.8712 5.31832 18.531 4.5 17.0048 4.5C15.3288 4.5 13.8121 5.32543 12.4549 6.97628C12.3132 7.14862 12.1632 7.34668 12.0049 7.57046C11.8466 7.34668 11.6966 7.14862 11.5548 6.97628C10.1976 5.32543 8.68102 4.5 7.005 4.5C5.4788 4.5 4.13867 5.31833 2.98462 6.95498C2.04252 8.29105 1.38864 9.90977 1.02298 11.8112C0.652277 13.7388 0.688225 15.3931 1.13083 16.774C1.39074 17.5849 1.78309 18.2233 2.30788 18.6892C2.91672 19.2297 3.6491 19.5 4.50502 19.5C6.02087 19.5 7.40276 18.7249 8.65069 17.1748C9.32296 16.3397 10.2211 14.839 11.345 12.6726C11.575 12.2294 11.7949 11.8151 12.0049 11.4296ZM10.8384 9.42226C10.4487 10.0959 10.0258 10.8723 9.56972 11.7515C8.50715 13.7996 7.6815 15.1893 7.09279 15.9206C6.24514 16.9735 5.38255 17.5 4.50502 17.5C3.81084 17.5 3.32096 17.0545 3.03539 16.1635C2.69674 15.1069 2.6806 13.782 2.98699 12.1888C3.29843 10.5694 3.84248 9.20896 4.61913 8.10752C5.37481 7.03584 6.1701 6.5 7.005 6.5C8.05111 6.5 9.05277 7.08214 10.01 8.24641C10.2528 8.54176 10.5289 8.93371 10.8384 9.42226Z" fill="#f6f6f6ae" ></path>
                                        </svg>
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
