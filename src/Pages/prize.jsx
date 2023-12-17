import React from "react";
import { motion } from "framer-motion";
import Slider from "../Components/slider";
import DarkSlider from "../Components/darkSlider";
import HeadingMob from "../Components/HeadingMob";
import HeadingMainBlack from "../Components/HeadingMainBlack";


const Prize = () => {

  return (
    <div className="w-screen bg-[#1a1a1a] overflow-hidden py-6" id="prizes">
      {/* <Slider text={['EdTech', 'GameDev', 'Logistics', 'Web3.0', 'Healthcare', 'XR','FinTech','Blockchain']} /> */}
      {/* <DummyBanner /> */}
      <div className="overflow-hidden">
        <DarkSlider text={["10lac+ Prize pool"]} />
      </div>
      <div className="w-screen xl:pt-[120px]  flex-col items-center h-full">
        <HeadingMob name="Prizes" />
        <StackedCards />
        <div className="relative bottom-0 left-0 right-0">
          <HeadingMainBlack name="Prizes" />
        </div>
      </div>
    </div>
  );
};



const StackedCards = () => {
  return (
    <>
      <section className="hidden xl:block">
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1, duration: 0.3 }}
          transition={{ type: 'just', stiffness: 110 }}
          className="flex py-6 justify-center items-center"
        >
          <motion.div
            initial={{ x: 65, y: -30, rotate: -10 }}
            whileHover={{ x: -15, y: -60, rotate: 0 }}
            className="m-2 relative z-10"
          >
            <Card
              color="bg-gradient-to-t from-[#8FB781] via-[#90C280] to-[#C1D29D]"
              textColor="text-[rgba(100%,100%,100%,90%)]"
              textData="Second prize"
              value="Rs. 50,000"
            />
          </motion.div>

          <motion.div
            initial={{ rotate: 0, y: -60, x: 0 }}
            // whileHover={{ y: -60, rotate: 0 }}
            className="m-2 relative z-30"
          >
            <Card
              color="bg-gradient-to-t from-[#FDDE56] via-[#FFEA8C] to-[#FDF0B7]"
              textColor="text-[rgba(0%,0%,0%,70%)]"
              textData="First prize"
              value="Rs. 100,000"
            />
          </motion.div>

          <motion.div
            initial={{ x: -65, y: -30, rotate: 10 }}
            whileHover={{ x: 15, y: -60, rotate: 0 }}
            className="m-2 relative z-20"
          >
            <Card
              color="bg-gradient-to-t from-[#C97FB0] via-[#F27CCA] to-[#F5AEDD]"
              textColor="text-[rgba(100%,100%,100%,90%)]"
              textData="Third prize"
              value="Rs. 25,000"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="xl:hidden h-full flex flex-col justify-center items-center">
        <div className="m-2 relative z-30">
          <Card2
            color="bg-gradient-to-t from-[#FDDE56] via-[#FFEA8C] to-[#FDF0B7]"
            textColor="text-[rgba(0%,0%,0%,70%)]"
            textData="First prize"
            value="Rs. 100,000"
          />
        </div>
        <div className="m-2  relative z-30">
          <Card2
            color="bg-gradient-to-t from-[#8FB781] via-[#90C280] to-[#C1D29D]"
            textColor="text-[rgba(100%,100%,100%,90%)]"
            textData="Second prize"
            value="Rs. 50,000"
          />
        </div>

        <div className="m-2 relative z-20">
          <Card2
            color="bg-gradient-to-t from-[#C97FB0] via-[#F27CCA] to-[#F5AEDD]"
            textColor="text-[rgba(100%,100%,100%,90%)]"
            textData="Third prize"
            value="Rs. 25,000"
          />
        </div>
      </section>
    </>
  );
};





const Card = ({ color, textColor, textData, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`flex flex-col gap-4 justify-center items-center text-4xl xl:text-6xl w-[300px] xl:w-[400px] h-[350px] xl:h-[450px] ${color} ${textColor} rounded-lg p-4 shadow-2xl shadow-[rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-100 ease-in-out`}
    >
      {value}
      <h3 className="text-3xl xl:text-5xl">{textData}</h3>
      <p className="text-[0.75rem] xl:text-lg mt-[0.5rem] xl:leading-5 text-center leading-3">Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors</p>
    </motion.div>
  );
};

const Card2 = ({ color, textColor, textData, value }) => {
  return (
    <div className="m-4">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`flex flex-col gap-4  justify-center items-center text-4xl md:text-6xl w-full h-[350px] ${color} ${textColor} rounded-lg p-4 shadow-2xl shadow-[rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-100 ease-in-out`}
      >
        {value}
        <h3 className="text-4xl">{textData}</h3>
        <p className="text-sm mt-[1rem] text-center px-4">Innerve Goodies and Merch. <br /> Fundings and Internship opportunities from our sponsors</p>
      </motion.div>
    </div>
  );
};

export default Prize;
