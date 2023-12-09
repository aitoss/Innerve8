import React from "react";
import { motion } from "framer-motion"; 
import Marquee from "react-fast-marquee";
import Slider from "../Components/slider";

const Tracks = () => {
    return(
        <>
            <div className="h-screen w-screen overflow-hidden bg-[#F9F0E7] max-w-[1920px] justify-center">
                <div className="w-full h-fit flex-col pt-10">
                    <Slider text={['EdTech', 'GameDev', 'Logistics', 'Web3.0', 'Healthcare', 'XR','FinTech','Blockchain']} />
                </div>
                <div className="flex pt-[6vh] flex-wrap gap-20 justify-center px-[20%] z-10">
                    <Track title="EdTech" img="src/assets/images/Vector.svg"/>
                    <Track title="Logistics"/>
                    <Track title="GameDev"/>
                    <Track title="XR"/>
                    <Track title="Web3.0"/>
                    <Track title="Healthcare"/>
                    <Track title="FinTech"/>
                </div>
                <div className="pt-[10vh] z-[0]">
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
            <div className="w-[175px] h-[175px] rounded-full bg-[#D9D9D9] flex-shrink-0 flex justify-center relative">
                <motion.div
                initial={{ scale: 0.2 }}
                animate={{ scale: 1 }}
                >
                <img src={img} alt="" style={{padding: '20%', justifyContent: 'center', paddingTop: '30%'}}/>
                </motion.div>
            </div>
            <div className="text-4xl text-[#212121]">
                {title}
            </div>
            </div>
        </>
    )
}

const Heading = () => {
    return (
        <div className="text-center tracking-[8px] font-medium text-[200px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
            <motion.div
                className=" translate-y-[-120px] tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#372F2F] to-[#FFFFFF] whitespace-nowrap"
            >
                Tracks
            </motion.div>
        </div>
    );
};

export default Tracks;