import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";
import Timer from "../Components/timer.jsx";
import InnerveText from "../Components/innerveText.jsx";

export default function Home() {
  return (
    <div className="w-screen bg-[#F9F0E7] h-screen">
      <div className="w-full h-1/6">
        <Nav />
      </div>

      <div className="w-full flex flex-col h-2/6">
        <div className="flex flex-col w-full items-center">
            <p className="text-WHITE text-lg md:text-3xl lg:text-4xl xl:text-5xl pt-6 text-black">India's biggest student driven hackathon</p>
            <p className="text-WHITE text-lg md:text-3xl lg:text-4xl xl:text-5xl text-black">happening in</p>
        </div>
        <div className="h-full flex justify-center">
          <Timer />
        </div>
        <div className="flex w-full justify-center overflow-hidden">
          <InnerveText />
        </div>
        <div className="absolute w-full flex justify-center overflow-hidden">
          <img src={Dots} alt="dots" className="scale-110" />
        </div>
      </div>
    </div>
  );
}
