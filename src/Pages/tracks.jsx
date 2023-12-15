import React from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { FiMousePointer } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import Slider from "../Components/slider";
import Vector from "../assets/images/vector.svg";

const indiData = [
  ["EdTech", "src/assets/images/Vector.svg"],
  ["Logistics", "src/assets/images/Vector.svg"],
  ["GameDev", "src/assets/images/Vector.svg"],
  ["XR", "src/assets/images/Vector.svg"],
  ["Web3.0", "src/assets/images/Vector.svg"],
  ["Healthcare", "src/assets/images/Vector.svg"],
];

const Tracks = () => {
  return (
    <>
      <div className="flex align-middle py-8  max-w-[1920px] w-screen h-full overflow-hidden flex-col relative top-5">
        <Slider
          text={[
            "GameDev",
            "Logistics",
            "Web3.0",
            "Healthcare",
            "FinTech",
            "EdTech",
          ]}
        />
        <Heading2 />
        <div
          id="Tracks"
          className="flex flex-row flex-wrap gap-x-[90px] lg:gap-x-36 gap-y-4 lg:gap-y-10 px-[2%] lg:justify-center justify-center items-center lg:items-center relative top-20"
        >
          {indiData.map((data) => (
            <Track title={data[0]} img={data[1]} />
          ))}
        </div>
        <div className="flex relative top-[8rem] mt-10 justify-center">
          <Heading />
        </div>
      </div>
    </>
  );
};

const Example = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const Track = () => {
  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);

  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,

    [-0.5, 0.5],

    ["25deg", "-25deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,

    [-0.5, 0.5],

    ["-25deg", "25deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;

    const height = rect.height;

    const mouseX = e.clientX - rect.left;

    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;

    const yPct = mouseY / height - 0.5;

    x.set(xPct);

    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);

    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,

        rotateX,

        transformStyle: "preserve-3d",
        background:
          "linear-gradient(155deg, #F5AEDD 15.11%, #E493C9 49.48%, #C97FB0 83.26%)",
      }}
      className="relative h-72 w-72 rounded-xl "
    >
      <div
        style={{
          transform: "translateZ(90px)",

          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-2xl"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl text-black"
        />

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-[#121212] text-2xl font-bold"
        >
          Track Name
        </p>
      </div>
    </motion.div>
  );
};

const Heading = () => {
  return (
    <div className="text-center hidden lg:block tracking-[8px] text-[150px] sticky text-transparent bg-gradient-to-b from-[#FFFFFF] to-[rgba(55,47,47,0.5)] bg-clip-text">
      <motion.div className=" translate-y-[-120px] tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap">
        Tracks
      </motion.div>
    </div>
  );
};

const Heading2 = () => {
  return (
    <div className="text-center lg:hidden tracking-[8px] font-medium text-[100px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap">
        Track
      </motion.div>
    </div>
  );
};
export default Tracks;
