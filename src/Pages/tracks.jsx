import React from "react";
import { motion } from "framer-motion"; 
import Marquee from "react-fast-marquee";
import Slider from "../Components/slider";

const Tracks = () => {
    return(
        <>
            <div className="flex justify-center flex-grow">
            <div className="h-screen w-full md:h-fit overflow-hidden bg-[#F9F0E7] max-w-[1920px] justify-center">
                <div className="w-full h-fit flex-col pt-10">
                    <Slider text={['EdTech', 'GameDev', 'Logistics', 'Web3.0', 'Healthcare', 'XR','FinTech','Blockchain']} />
                </div>
                <div className="flex pt-[6vh] flex-wrap gap-20 justify-center px-[20%] z-10">
                    <Track title="EdTech" img="src/assets/images/Vector.svg"/>
                    <Track title="Logistics" img="src/assets/images/Vector.svg"/>
                    <Track title="GameDev" img="src/assets/images/Vector.svg"/>
                    <Track title="XR" img="src/assets/images/Vector.svg"/>
                    <Track title="Web3.0" img="src/assets/images/Vector.svg"/>
                    <Track title="Healthcare" img="src/assets/images/Vector.svg"/>
                    <Track title="FinTech" img="src/assets/images/Vector.svg"/>
                </div>
                <div className="pt-[10vh] z-[0]">
                <Heading />
                </div>
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
            <div className="w-[175px] h-[175px] rounded-full bg-[#D9D9D9] flex-shrink-0 flex justify-center relative">
                <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{scale: 1, rotate: [0, 10, 0], duration: 0.5}}
                >
                <img src={img} alt="" style={{padding: '20%', justifyContent: 'center', paddingTop: '30%'}}/>
                </motion.div>
            </div>
            </motion.div>
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
                className=" translate-y-[-120px] tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap"
            >
                Tracks
            </motion.div>
        </div>
    );
};

export default Tracks;