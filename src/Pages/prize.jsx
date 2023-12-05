import React from "react";
import { motion } from "framer-motion";

const Prize = () => {
    return (
        <div className="relative w-screen bg-[#212121] h-screen overflow-hidden">
            <DummyBanner />
            <div className="w-screen pt-40 flex-col items-center h-full">
                <StackedCards />
                <Heading />
            </div>
        </div>
    );
};

const DummyBanner = () => {
    return (
        <div className=" absolute top-10 left-0 right-0 overflow-hidden">
            <motion.div
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="text-[#878787] text-5xl font-medium tracking-[12px]"
            >
                10lac+ PrizePool
            </motion.div>
        </div>
    );
};

const StackedCards = () => {
    return (
        <div className="flex py-6 justify-center items-center">
            <motion.div
                whileHover={{ y: -35, x: -300, rotate: 0 }}
                initial={{ rotate: -15, y: -10, x: -40 }}
                className="m-2 relative z-2"
            >
                <Card color="bg-[#C1D29D]" />
            </motion.div>

            <motion.div
                whileHover={{ y: -60, rotate: 0, zIndex: 4 }}
                initial={{ rotate: 0, y: -60, x: 0, zIndex: 4 }}
                className="m-2 absolute z-4"
            >
                <Card color="bg-[#FDF0B7]" />
            </motion.div>

            <motion.div
                whileHover={{ y: -35, x: 300, rotate: 0 }}
                initial={{ rotate: 15, y: -10, x: 40 }}
                className="m-2 relative z-2"
            >
                <Card color="bg-[#F5AEDD]" />
            </motion.div>
        </div>
    );
};

const Heading = () => {
    return (
        <div className="text-center tracking-[8px] font-medium text-[200px] sticky -z-1 text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
            <motion.div
                className=""
            >
                Prizes
            </motion.div>
        </div>
    );
};


const Card = ({ color }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-[400px] h-[450px] ${color} rounded-lg p-4 shadow-md cursor-pointer transition-transform duration-100 ease-in-out`}
        >
            Card Content
        </motion.div>
    );
};

export default Prize;
