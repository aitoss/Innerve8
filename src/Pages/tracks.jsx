import React from "react";
import { motion } from "framer-motion";

const Tracks = () => {
    return(
        <>
            <div className="relative w-screen h-screen overflow-hidden">
            <div className="text-center mt-[5vh] text-7xl text-[#212121]">
                Tracks on various projects
            </div>
            <div className="w-screen pt-60 flex-col items-center h-full">
            <Card />
            </div>
        </div>
        </>
    )
}

const Card = () =>
{
    return(
        <>
        <motion.div
        animate={{
            x:20,
            y:20,
            rotate: 15,
        }} className="w-[250px] h-[250px] ml-[5%] backdrop-blur-md rounded-md bg-white/5 shadow-xl"
        >
            <div className="relative text-center pt-[5%] text-[#414141]">
            TEXT
            </div>
        </motion.div>
        </>
    )
}

export default Tracks