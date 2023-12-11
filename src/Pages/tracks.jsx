import React from "react";
import { motion } from "framer-motion"; 
import Marquee from "react-fast-marquee";
import Slider from "../Components/slider";

const indiData=[['EdTech', 'src/assets/images/Vector.svg'],['Logistics','src/assets/images/Vector.svg'],['GameDev','src/assets/images/Vector.svg'],['XR','src/assets/images/Vector.svg'],['Web3.0','src/assets/images/Vector.svg'],['Healthcare','src/assets/images/Vector.svg'],['FinTech','src/assets/images/Vector.svg']]

const Tracks = () => {
    return(
        <>
            <div className="flex justify-center">
            <div className="lg:h-screen w-full h-fit lg:overflow-hidden bg-[#F9F0E7] max-w-[1920px] justify-center">
                <div className="w-full h-fit flex-col pt-10">
                    <Slider text={['EdTech', 'GameDev', 'Logistics', 'Web3.0', 'Healthcare', 'XR','FinTech','Blockchain']} />
                </div>
                <div className="flex pt-[6vh] flex-wrap gap-20 justify-center px-[20%] z-10 flex-row">
                    {indiData.map((data) => (
                        <Track title={data.at(0)} img={data.at(1)}/>
                    ))}
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
                    <div className="w-48 h-48 rounded-[3.5rem] bg-[#D9D9D9] flex flex-wrap justify-center relative drop-shadow-md">
                        <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{scale: 1, rotate: [0, 10, 0], duration: 0.5}}
                        >
                        <img src={img} alt="" style={{padding: '20%', justifyContent: 'center', paddingTop: '30%'}}/>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="text-4xl text-[#212121] ">
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