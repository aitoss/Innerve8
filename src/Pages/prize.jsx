import React from "react";
import { motion } from "framer-motion";

const Prize = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-[#212121] h-screen">
      <StackedCards />
    </div>
  );
};

const StackedCards = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        whileHover={{ y: 0, x:-300, rotate: 0 }}
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
        whileHover={{ y: 0, x:300, rotate: 0 }}
        initial={{ rotate: 15, y: -10, x: 40 }}
        className="m-2 relative z-2"
      >
        <Card color="bg-[#F5AEDD]" />
      </motion.div>
    </div>
  );
};

const Card = ({ color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`w-[460px] h-[520px] ${color} rounded-lg p-4 shadow-md cursor-pointer transition-transform duration-300 ease-in-out`}
    >
      Card Content
    </motion.div>
  );
};

export default Prize;
