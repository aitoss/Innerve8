import React from "react";
import { motion } from "framer-motion";
import Slider from "../Components/slider";
import DarkSlider from "../Components/darkSlider";

const Prize = () => {
  return (
    <div className="w-screen bg-[#212121] overflow-hidden">
      {/* <Slider text={['EdTech', 'GameDev', 'Logistics', 'Web3.0', 'Healthcare', 'XR','FinTech','Blockchain']} /> */}
      {/* <DummyBanner /> */}
      <div className="overflow-hidden mt-6">
      <DarkSlider text={["10lac+ Prize pool"]} />
      </div>
      <div className="w-screen lg:pt-[120px]  flex-col items-center h-full">
        <Heading2/>
        <StackedCards />
        <Heading />
      </div>
    </div>
  );
};

const DummyBanner = () => {
  return (
    <div className="absolute top-10 left-0 right-0 overflow-hidden">
      <motion.div
        variants={{
          start: { x: "100%" },
          end: { x: "-100%" },
        }}
        initial="start"
        animate="end"
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="text-[#787470] text-5xl font-medium"
      >
        <div className="w-[1990px] flex gap-4 items-center justify-center">
          <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">
            10lac+ Prize pool
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <rect
              x="0.618164"
              y="0.85083"
              width="40.2688"
              height="40.2985"
              rx="2.68558"
              fill="#929292"
              fillOpacity="0.4"
            />
            <path
              d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z"
              fill="#212121"
            />
          </svg>
          <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">
            10lac+ Prize pool
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <rect
              x="0.618164"
              y="0.85083"
              width="40.2688"
              height="40.2985"
              rx="2.68558"
              fill="#929292"
              fillOpacity="0.4"
            />
            <path
              d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z"
              fill="#212121"
            />
          </svg>
          <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">
            10lac+ Prize pool
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <rect
              x="0.618164"
              y="0.85083"
              width="40.2688"
              height="40.2985"
              rx="2.68558"
              fill="#929292"
              fillOpacity="0.4"
            />
            <path
              d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z"
              fill="#212121"
            />
          </svg>
          <h1 className=" tracking-tight text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#2c2a2a] to-[#525252] whitespace-nowrap">
            10lac+ Prize pool
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <rect
              x="0.618164"
              y="0.85083"
              width="40.2688"
              height="40.2985"
              rx="2.68558"
              fill="#929292"
              fillOpacity="0.4"
            />
            <path
              d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z"
              fill="#212121"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

const StackedCards = () => {
  return (
    <>
      <section className="hidden lg:block">
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{scale: 1, duration: 0.3}}
          transition={{type: 'just', stiffness: 110}}
          className="flex py-6 justify-center items-center"
        >
          <motion.div
            initial={{ x: 65, y: -30, rotate: -10 }}
            whileHover={{ x: -15, y: -60, rotate: 0 }}
            className="m-2 relative z-10"
          >
            <Card
              color="bg-gradient-to-t from-[#8FB781] via-[#90C280] to-[#C1D29D]"
              textColor="text-[hsla(100%,100%,13%,90%)]"
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
              textColor="text-[hsla(10%,8%,93%,2%)]"
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
              textColor="text-[hsla(100%,100%,13%,90%)]"
              textData="Third prize"
              value="Rs. 25,000"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="lg:hidden h-full flex flex-col">
        <div className="flex flex-col py-8 justify-center items-center">
          <div className="m-2  relative z-30">
            <Card2
              color="bg-gradient-to-t from-[#FDDE56] via-[#FFEA8C] to-[#FDF0B7]"
              textColor="text-[hsla(0,0%,13%,90%)]"
              textData="First prize"
              value="Rs. 100,000"
            />
          </div>
          <div className="m-2  relative z-30">
            <Card2
              color="bg-gradient-to-t from-[#8FB781] via-[#90C280] to-[#C1D29D]"
              textColor="text-[hsla(100%,100%,13%,90%)]"
              textData="Second prize"
              value="Rs. 50,000"
            />
          </div>

          <div className="m-2 relative z-20">
            <Card2
              color="bg-gradient-to-t from-[#C97FB0] via-[#F27CCA] to-[#F5AEDD]"
              textColor="text-[hsla(100%,100%,13%,90%)]"
              textData="Third prize"
              value="Rs. 25,000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const Heading = () => {
  return (
    <div className="text-center lg:block hidden tracking-[10px] font-medium text-[250px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
     <motion.div
  whileInView={{ y: -80, scale: 1, duration: 5 }}
  transition={{ type: 'just', stiffness: 110 }}
  className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap"
>
  Prizes
</motion.div>
    </div>
  );
};

const Heading2 = () => {
    return (
      <div className="text-center lg:hidden tracking-[8px] font-medium text-[100px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
        <motion.div className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap">
          Prizes
        </motion.div>
      </div>
    );
  };

const Card = ({ color, textColor, textData, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`flex flex-col gap-4 justify-center items-center text-6xl w-[400px] h-[450px] ${color} ${textColor} rounded-lg p-4 shadow-2xl shadow-[rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-100 ease-in-out`}
    >
      {value}
      <h3 className="text-4xl">{textData}</h3>
      <p className="text-[1rem] mt-[1rem] text-center">Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors</p>
    </motion.div>
  );
};

const Card2 = ({ color, textColor, textData, value }) => {
  return (
    <div className="m-8">
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`flex flex-col gap-4  justify-center items-center text-6xl m-3 w-full h-[350px] ${color} ${textColor} rounded-lg p-4 shadow-2xl shadow-[rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-100 ease-in-out`}
    >
      {value}
      <h3 className="text-3xl">{textData}</h3>
    </motion.div>
    </div>
  );
};

export default Prize;
