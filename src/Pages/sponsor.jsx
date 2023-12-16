import React from 'react'
import { motion } from "framer-motion";
import udchalo from "../assets/images/udchalo.png"
import accops from "../assets/images/accops.png"
import byte from "../assets/images/byte.png"
import mro from "../assets/images/mro.png"
// import Slider from '../Components/slider';
import Slider from "../Components/slider";

const Sponsor = () => {
  return (
    <>
     {/* <DummyBanner/> */}
     <div className="h-full">
     <div className='flex justify-center w-screen top-16 relative'>
     <Slider text={['Our Sponsors']} />
     </div>
     <div className="mt-16 -mb-4">
     <Heading2/>
     </div>
    <div className=" p-4 w-screen flex flex-col xl:mt-[3%] justify-center flex-wrap items-center">
   
    <Heading title="TITLE SPONSOR" />
    <div className='flex flex-wrap justify-center px-[10%] flex-row'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={2} />
    </div>
    <Heading title="PLATINUM SPONSOR" />
    <div className='flex flex-wrap px-[10%] justify-center'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={2} />
    </div>
    <Heading title="GOLD SPONSOR" />
    <div className='flex flex-wrap px-[10%] justify-center'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={3} />
    </div>
        </div>
        <div className="flex relative  mt-8 justify-center">
        <HeadingMain/>
        </div>
     </div>

    </>
  )
}


const Heading = ({ title }) => {
    return (
        <div className="text-center flex  mt-14 font-medium text-4xl text-[24px] text-[#121212] whitespace-nowrap justify-center">
            <motion.div className="tracking-tight text-[#121212] bg-clip-text whitespace-nowrap">
                {title}
            </motion.div>
        </div>
    );
};

const SponsorLogos = ({ logoCount }) => {
    const sponsorLogos = [udchalo, byte, mro, accops].slice(0, logoCount);

    return (
        <div className="flex justify-center items-center flex-row flex-wrap gap-7 mt-8">
            {sponsorLogos.map((logo, idx) => (
                <motion.div
                   initial={{ scale: 0.9 }}
                //    whileInView={{ scale: 1 }}
                    whileHover={{scale: 1.05, rotate: [0, 2, 0], duration: 0.1}}
                >
                <img
                    key={idx}
                    src={logo}
                    alt={`Sponsor Logo ${idx + 1}`}
                    className="max-h-16 max-w-16"
                />
                </motion.div>
            ))}
        </div>
    );
};

const HeadingMain = () => {
    return (
      <div className="text-center xl:block hidden tracking-[10px] bg-clip-text  font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
       <motion.div
    whileInView={{ y: -80, scale: 1.2, duration: 5 }}
    transition={{ type: 'just', stiffness: 110 }}
    className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap"
  >
    Sponsors
  </motion.div>
      </div>
    );
  };

  const Heading2 = () => {
    return (
      <div className="py-4 text-center xl:hidden tracking-[8px] font-medium text-[64px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
        <motion.div className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap">
          Sponsors
        </motion.div>
      </div>
    );
  };


export default Sponsor