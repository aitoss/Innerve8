import React, { useState } from 'react';
import './Nav.css'; // Import the CSS file for your component

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>  
            <div className="inner-nav">
                <ul className={`menu-nav ${navbarOpen ? ' show-menu' : ''}`}>
                    <div className="menu-nav-header w-full flex flow-col items-center justify-between md:pl-20 pl-10 p-10">
                        <div className="btn flex items-center justify-center gap-3 border border-[#ffffff] rounded-full ml-10 pl-5 pr-2 py-2 cursor-pointer">
                            <h3 className="text-[#ffffff] text-lg font-[400]">Brochure</h3>
                            <div className="w-[30px] h-[30px] flex items-center justify-center text-[#ffffff] border border-[#ffffff] rounded-full hover:rotate-45">↗</div>
                        </div>
                        <div className='flex flow-col gap-2 cursor-pointer' onClick={() => setNavbarOpen((prev) => !prev)}>
                            <h3 className="text-[#ffffff] text-lg font-[400]">Close</h3>
                        <div className="w-[30px] h-[30px] flex items-center justify-center text-[#ffffff] border border-[#ffffff] rounded-full hover:rotate-45">×</div>
                    </div>
                    </div>
                    <ul className="menu-nav-items md:ml-20 ml-10 pt-20">
                        <li className='mt-20'>
                            <a href="#" className="ml-10 text-white font-Gilroy-SemiBold text-2xl font-normal leading-[146%] tracking-[0.72px]">HOME</a>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className="ml-10 text-white font-Gilroy-SemiBold text-2xl font-normal leading-[146%] tracking-[0.72px]">PRIZES</a>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className="ml-10 text-white font-Gilroy-SemiBold text-2xl font-normal leading-[146%] tracking-[0.72px]">THEMES</a>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className="ml-10 text-white font-Gilroy-SemiBold text-2xl font-normal leading-[146%] tracking-[0.72px]">SPONSORS</a>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className="ml-10 text-white font-Gilroy-SemiBold text-2xl font-normal leading-[146%] tracking-[0.72px]">FAQs</a>
                        </li>
                    </ul>
                    <div className="menu-nav-footer mb-20 md:pl-20 pl-10">
                        <div className="socials-list flex flow-col gap-5 pl-10">
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="w-screen max-w-[1540px] px-12 py-6 flex flex-row justify-between nav-inner">
                    <div className="flex items-center gap-4">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="40" viewBox="0 0 19 40" fill="none">
                            <path d="M5.57422 0.655886V13.2C5.60196 13.5323 5.89044 14.0972 6.82248 13.6984C7.75451 13.2997 14.2566 9.37859 17.3911 7.4679C17.7239 7.30176 18.19 6.85316 17.3911 6.38795C16.5922 5.92274 9.84604 2.04044 6.57283 0.157446C6.23996 -0.0363921 5.57422 -0.208077 5.57422 0.655886Z" fill="#212121" />
                            <path d="M18.5728 26.7107C18.5728 28.5683 17.883 31.5379 17.2727 32.2578C14.3927 36.8714 9.16352 38.9672 7.48717 39.6391C7.3237 39.7046 7.194 39.7565 7.10356 39.796C6.03715 40.2612 5.68168 39.8237 5.59281 39.5468L5.57425 25.3699L0.514625 22.3908C-0.417411 21.9921 0.126277 21.5047 0.514625 21.3109C5.81281 18.1818 16.6089 11.824 17.4078 11.4252C18.2067 11.0265 18.5173 11.7021 18.5728 12.0898V26.7107Z" fill="#212121" />
                        </svg>
                        <h1 className="text-[#212121] text-2xl font-[400]">Innerve</h1>
                    </div>
                    <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full pl-5 pr-2 py-2 cursor-pointer" onClick={() => setNavbarOpen((prev) => !prev)}>
                        <h3 className="text-[#212121] text-lg font-[400]">Menu</h3>
                        <div className="w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full hover:rotate-45">↗</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
