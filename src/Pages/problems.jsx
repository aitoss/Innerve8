import React from "react";
import Slider from "../Components/slider";
import { motion } from "framer-motion";

const Problems = () => {
    return (
        <>
        <div className="relative w-screen bg-[#F9F0E7] h-screen overflow-hidden">
            <div className="w-full h-fit pt-10">
            <Slider text={["Problem Statement"]}/>
            </div>
            <div className="flex flex-row justify-center relative items-center pt-[8vh] flex-wrap gap-8 px-[512px] ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            </div>
        </div>
        </>
    );
}

const Cards = () => {
    return(
        <>
            <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{scale: 1, rotate: [0, 10, 0], duration: 0.5}}
            >
            <div className="flex flex-col rounded-lg w-[400px] h-[300px] p-[32px] bg-blue-300"></div>
            </motion.div>
        </>
    )
}
export default Problems