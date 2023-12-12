import React from "react";
import Slider from "../Components/slider";
import { motion } from "framer-motion";

const Problems = () => {
    return (
        <>
        <div className="relative hidden lg:block w-full items-center justify-center bg-[#F9F0E7] h-full overflow-hidden max-w-[1920px]">
            <div className="w-max-[1920px] h-fit relative top-1 py-4 flex justify-center">
            <Slider text={["Problem Statement"]}/>
            </div>
            <div className="flex flex-row justify-center relative items-center pt-[8vh] flex-wrap gap-x-28 px-[20rem] gap-y-10">
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
            initial={{ scale: 0.99 }}
            whileHover={{scale: 1, rotate: [0, 1, 0], duration: 0.5}}
            >
            <div className="flex flex-col rounded-lg w-[30rem] h-[18rem] p-[32px] bg-[#FFFFFF] opacity-80">
                <div className="text-3xl font-medium text-[#212121] pb-[0.3rem]">
                    Voice Based Travel Booking
                </div>
                <hr className="bg-black h-[1px] border-none" style={{borderTop:"1px solid black"}}/>
                <div className="text-2xl bg-gradient-to-b from-[#C1D29D] via-[#90C280] to-[#8FB781] bg-clip-text text-transparent">
                     sponsored by @google 
                </div>
                <div className="text-3xl relative mt-auto flex-grow-1 text-[#6B6B70]">
                    Prizes Worth
                <div className="text-4xl relative mt-auto flex-grow-1 text-[#6B6B70]">
                    Rs.10,000
                    </div>
                </div>
            </div>
            </motion.div>
        </>
    )
}
export default Problems