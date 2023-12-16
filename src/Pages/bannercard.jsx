import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Bannercard = () => {
    return (
        <>
            <section className=" md:p-10 m-8">
                <div className="banner flex flex-col gap-8 p-12 max-w-screen-xl" style={{margin: 'auto'}}>
                    <div className="banner-sub w-full flex justify-between items-center">
                        <p className="banner-heading font-medium">Got questions? <br />Contact us</p>
                        <div className="btn group flex items-center justify-center gap-3 border border-[#212121] rounded-full p-2 pl-5 cursor-pointer">
                            <h3 className="banner-subheading font-[400]">aitoss@aitpune.edu.in</h3>
                            <div className="w-[30px] h-[30px] flex items-center justify-center text-base text-[#121212e6] border border-[#121212e6] rounded-full group-hover:rotate-45  transition-all">↗</div>
                        </div>
                    </div>
                    <div className="banner-sub w-full flex justify-between items-center">
                        <p className="banner-heading font-medium">Want to <br />sponsor us?</p>
                        <div className="banner-sponser flex flex-col justify-center items-end gap-4">
                            <div className="btn group flex items-center gap-3 border border-[#212121] rounded-full p-2 pl-5 cursor-pointer">
                                <h3 className="banner-subheading font-[400]">Fill the form</h3>
                                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#121212e6] border border-[#121212e6] rounded-full group-hover:rotate-45  transition-all">↗</div>
                            </div>
                            <div className="btn group flex items-center justify-center gap-3 border border-[#121212e6] rounded-full p-2 pl-5 cursor-pointer">
                                <h3 className="banner-subheading font-[400]">Brochure</h3>
                                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#121212e6] border border-[#121212e6] rounded-full group-hover:rotate-45  transition-all">↗</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default Bannercard