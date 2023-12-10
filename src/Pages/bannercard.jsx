import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Bannercard = () => {
    return (
        <>
            <section className="bg-[#121212] w-screen p-16 ">
                <div className="bg-green-300 flex flex-col gap-8 rounded-3xl p-16">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-[#121212e6] text-[48px] font-medium">Got questions? <br />Contact us</p>
                        <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full p-2 cursor-pointer">
                            <h3 className="text-[#121212e6] text-2xl font-[400]">aitoss@aitpune.edu.in</h3>
                            <div className="w-[30px] h-[30px] flex items-center justify-center text-base text-[#121212e6] border border-[#121212e6] rounded-full hover:rotate-45">↗</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className="text-[#121212e6] text-[48px] font-medium">Want to <br />sponsor us?</p>

                        <div className="flex flex-col justify-center items-end gap-4">
                            <div className="btn flex items-center gap-3 border border-[#212121] rounded-full p-2 cursor-pointer">
                                <h3 className="text-[#121212e6] text-2xl font-[400]">Fill the form</h3>
                                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#121212e6] border border-[#121212e6] rounded-full hover:rotate-45">↗</div>
                            </div>
                            <div className="btn flex items-center justify-center gap-3 border border-[#121212e6] rounded-full p-2 cursor-pointer">
                                <h3 className="text-[#121212e6] text-2xl font-[400]">Brochure</h3>
                                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#121212e6] border border-[#121212e6] rounded-full hover:rotate-45">↗</div>
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