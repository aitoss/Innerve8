import React from "react";
import { motion } from "framer-motion"; 
import Marquee from "react-fast-marquee";
import Slider from "../Components/slider";

const indiData=[['EdTech', 'src/assets/images/Vector.svg'],['Logistics','src/assets/images/Vector.svg'],['GameDev','src/assets/images/Vector.svg'],['XR','src/assets/images/Vector.svg'],['Web3.0','src/assets/images/Vector.svg'],['Healthcare','src/assets/images/Vector.svg']]

const Tracks = () => {
    return(
        <>
            <div className="flex align-middle py-16  max-w-[1920px] w-screen h-auto overflow-hidden flex-col relative top-5">
                <Slider text={["GameDev", 'Logistics', 'Web3.0', 'Healthcare', 'FinTech', 'EdTech']} />
                <Heading2/>
                <div id="Tracks" className="flex flex-row flex-wrap gap-x-36 gap-y-4 lg:gap-y-10 lg:px-[25%] px-[2%] justify-center items-center relative top-20">
                    {indiData.map((data) => (
                        <Track title={data[0]} img={data[1]} />
                    ))}
                </div>
                <div className="flex relative top-[8rem] mt-10 justify-center">
                    <Heading />
                </div>
            </div>
        </>
    )
}
const Track = ({title, img}) => {
    return(
        <>
            <div className="flex flex-col align-middle items-center">
                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{scale: 1.05, rotate: [0, 5, 0], duration: 0.1, style: {background: '#F9F0E7'}}}
                >
                    <div className="lg:w-48 lg:h-48 h-32 w-32 rounded-[3.5rem] bg-[#D9D9D9] flex flex-wrap justify-center relative drop-shadow-md">
                        <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{scale: 1, rotate: [0, 10, 0], duration: 0.5}}
                        >
                        <img src={img} alt="" style={{padding: '20%', justifyContent: 'center', paddingTop: '30%'}}/>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="text-4xl py-2 text-[#212121] ">
                    {title}
                </div>
            </div>
        </>
    )
}

const Heading = () => {
    return (
        <div className="text-center hidden lg:block tracking-[8px] font-medium text-[200px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
            <motion.div
                className=" translate-y-[-120px] tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap"
            >
                Tracks
            </motion.div>
        </div>
    );
};



const Heading2 = () => {
    return (
    <div className="text-center relative top-[20px] lg:hidden tracking-[8px] font-medium text-[80px] text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
            <motion.div
                className=" tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap"
            >
                Tracks
            </motion.div>
        </div>
    );
};
export default Tracks;