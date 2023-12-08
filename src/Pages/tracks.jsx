import React from "react";
import { motion } from "framer-motion";

const Tracks = () => {
    return(
        <>
            <div className="relative w-screen h-screen overflow-hidden bg-[#212121]">
            <div className="text-center pt-[6%] text-7xl text-[#F9F0E7]">
            Projects on various Tracks
            </div>
            <div className="pl-[5%]">
            <div className="w-full absolute translate-x-[-3%] translate-y-[15vh] flex-col items-center h-full z-0">
            <EdCard />
            </div>
            <div className="w-full absolute translate-x-[12%] translate-y-[28vh] flex-col items-center h-full z-1">
                <W3Card />
            </div>
            <div className="w-full absolute translate-x-[28%] translate-y-[12vh] flex-col items-center h-full z-2">
                <HCard />
            </div>
            <div className="w-full absolute translate-x-[46%] translate-y-[25vh] flex-col items-center h-full z-3">
                <CCard />
            </div>
            <div className="w-full absolute translate-x-[62%] translate-y-[10vh] flex-col items-center h-full z-0">
                <LCard />
            </div>
            </div>
        </div>
        </>
    )
}

const EdCard = () =>
{
    return(
        <>
        <motion.div
         className="w-[400px] h-[300px] ml-[5%] rounded-3xl backdrop-blur-xl bg-[#F9F0E7] shadow-xl rotate-[15deg]"
        >
            <div className="relative pt-[10%] text-center text-[#6B6B70] text-5xl">
            EdTech
            </div>
        </motion.div>
        </>
    )
}

const W3Card = () =>
{
    return(
        <>
        <motion.div
         className="w-[400px] h-[300px] ml-[5%] rounded-3xl backdrop-blur-lg bg-[#F9F0E7] shadow-2xl rotate-[-6deg]"
        >
            <div className="relative pt-[10%] text-center text-[#6B6B70] text-5xl">
            Web 3.0
            </div>
        </motion.div>
        </>
    )
}

const HCard = () =>
{
    return(
        <>
        <motion.div
         className="w-[400px] h-[300px] ml-[5%] rounded-3xl backdrop-blur-lg bg-[#F9F0E7] shadow-xl rotate-[-15deg]"
        >
            <div className="relative pt-[10%] text-center text-[#6B6B70] text-5xl">
            Healthcare
            </div>
        </motion.div>
        </>
    )
}

const CCard = () =>
{
    return(
        <>
        <motion.div
         className="w-[400px] h-[300px] ml-[5%] rounded-3xl backdrop-blur-lg bg-[#F9F0E7] shadow-xl rotate-[4deg]"
        >
            <div className="relative pt-[10%] text-center text-[#6B6B70] text-5xl">
            Cybersec
            </div>
        </motion.div>
        </>
    )
}

const LCard = () =>
{
    return(
        <>
        <motion.div
         className="w-[400px] h-[300px] ml-[5%] rounded-3xl backdrop-blur-lg bg-[#F9F0E7] shadow-xl rotate-[-10deg]"
        >
            <div className="relative pt-[10%] text-center text-[#6B6B70] text-5xl">
                Logistics
            </div>
        </motion.div>
        </>
    )
}

export default Tracks