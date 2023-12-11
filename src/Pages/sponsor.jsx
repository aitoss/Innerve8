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
     <DummyBanner/>
     {/* <Slider text={['Sponsors', 'Sponsors', 'Sponsors']} /> */}
    <div className=" p-4 w-screen flex flex-col mt-[3%] justify-center flex-wrap items-center">
   
    <Heading title="{Title Sponsor}" />
    <div className='flex flex-wrap justify-center px-[20%] flex-row'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={2} />
    </div>
    <Heading title="{Platinum Sponsor}" />
    <div className='flex flex-wrap justify-center px-[20%]'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={2} />
    </div>
    <Heading title="{Gold Sponsor}" />
    <div className='flex flex-wrap justify-center px-[20%]'>
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={3} />
    </div>
    <div className='flex flex-wrap justify-center px-[20%] pb-[10vh]'>
    <Heading title="{Co Sponsor}" />
    <SponsorLogos logoCount={4} />
    <SponsorLogos logoCount={3} />
    </div>
        </div>
    </>
  )
}

const DummyBanner = () => {
    return (
        <div className='flex justify-center w-full'>
        <div className="relative top-14 left-0 right-0 overflow-hidden flex justify-center">
            <motion.div
                variants={{
                    start: { x: "100%" },
                    end: { x: "-100%" },
                }
                }
                initial="start"
                animate="end"
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="text-[#787470] text-5xl font-medium flex-col"
            >
                <div className="w-[100%] flex gap-6 items-center justify-center">
                    <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">Sponsors</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                        <rect x="0.618164" y="0.85083" width="40.2688" height="40.2985" rx="2.68558" fill="#929292" fillOpacity="0.4" />
                        <path d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z" fill="#212121" />
                    </svg>
                    <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">Sponsors</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                        <rect x="0.618164" y="0.85083" width="40.2688" height="40.2985" rx="2.68558" fill="#929292" fillOpacity="0.4" />
                        <path d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z" fill="#212121" />
                    </svg>
                    <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">Sponsors</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                        <rect x="0.618164" y="0.85083" width="40.2688" height="40.2985" rx="2.68558" fill="#929292" fillOpacity="0.4" />
                        <path d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z" fill="#212121" />
                    </svg>
                    <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">Sponsors</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                        <rect x="0.618164" y="0.85083" width="40.2688" height="40.2985" rx="2.68558" fill="#929292" fillOpacity="0.4" />
                        <path d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z" fill="#212121" />
                    </svg>
                </div>
            </motion.div>
        </div>
        </div>
    );
};

const Heading = ({ title }) => {
    return (
        <div className="text-center flex  mt-14 font-medium text-4xl text-black whitespace-nowrap justify-center">
            <motion.div className="tracking-tight text-black bg-clip-text whitespace-nowrap">
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
                    whileHover={{scale: 1.05, rotate: [0, 2, 0], duration: 0.1, background: '#F9F0E7', shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
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

export default Sponsor