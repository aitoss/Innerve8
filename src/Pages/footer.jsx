import React from 'react'
import { IoLogoInstagram } from "react-icons/io";



const Footer = () => {
  return (
    <>
    <section className="h-screen bg-[#121212]">
    <div className="flex-col flex justify-center items-center">

        <div classname="upper-footer flex flex-col">
        <div>
            
        </div>

        <div>

        </div>
        </div>

        <div className="down-footer flex-col flex justify-center items-center">
            <div className="flex flex-row justify-center space-x-6 items-center">
        <IoLogoInstagram  className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
        <p className="text-white px-2 text-[22px]">Instagram</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <IoLogoInstagram  className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
        <p className="text-white px-2 text-[22px]">Instagram</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <IoLogoInstagram  className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
        <p className="text-white px-2 text-[22px]">Instagram</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <IoLogoInstagram  className="text-6xl border-2 p-2 border-[#9f9f9f59] rounded-full" />
        <p className="text-white px-2 text-[22px]">Instagram</p>
            </div>
            <div>
            <p className="text-[28px] py-4">Made with love by Open Source Software Club</p>
            </div>
        </div>
        
    </div>

    </section>
    </>
  )
}

export default Footer;