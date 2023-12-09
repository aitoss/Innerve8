import React from 'react'
import { IoMdMail } from "react-icons/io";

const Bannercard = () => {
  return (
    <>
 <section className="bg-[#121212] w-screen p-16 h-[60vh]">
            <div className="bg-green-300 flex flex-row rounded-3xl p-16 h-[45vh] shadow-xl">
                <div className="flex flex-col w-[50%] space-y-8">
                    <p className="text-[#121212] text-[48px] font-medium">Got any question for us?</p>
                    <p className="text-[#121212] text-[48px] font-medium">Want to sponsor us?</p>
                </div>

                <div className="flex flex-col w-[50%] items-end justify-center">
                    <div className="flex text-3xl text-black gap-4 items-center">
                        <IoMdMail className="text-4xl" />
                        <p>@aitpune.edu.in</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Bannercard