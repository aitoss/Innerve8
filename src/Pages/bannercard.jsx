import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Bannercard = () => {
  return (
    <>
 <section className="bg-[#121212] w-screen p-16 h-[60vh]">
            <div className="bg-green-300 flex flex-row gap-[500px] rounded-3xl p-16 h-[45vh] shadow-xl">
                <div className="flex flex-col w-[50%] gap-24">
                    <p className="text-[#121212] text-[48px] font-medium">Got any question <br></br>for us?</p>
                    <p className="text-[#121212] text-[48px] font-medium">Want to sponsor us?</p>
                </div>

                <div className="flex flex-col w-[50%]  space-y-12 mt-2 items-start justify-center">
                    <div className="flex text-3xl text-[#121212] gap-4 items-center">
                        <IoMdMail className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
                        <p>aitpune.edu.in</p>
                    </div>
                    <div className="flex text-3xl text-[#121212] gap-4  items-center">
                        <IoLogoInstagram  className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
                        <p>ossclub</p>
                    </div>
                    <div className="flex text-3xl text-[#121212] gap-4 items-center">
                        <IoIosArrowRoundForward className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
                        <p>brochure</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Bannercard