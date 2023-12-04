import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";
import Timer from "../Components/timer.jsx";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-1/6">
        <Nav />
      </div>
      <div className="absolute w-full flex justify-center overflow-hidden">
        <img src={Dots} alt="dots" className="scale-110" />
      </div>
      <div className="w-full flex flex-col h-2/6">
        <div className="flex flex-col w-full items-center">
            <p className="text-black text-lg md:text-3xl lg:text-4xl xl:text-5xl pt-6">India's biggest student driven hackathon</p>
            <p className="text-black text-lg md:text-3xl lg:text-4xl xl:text-5xl">happening in</p>
        </div>
        <div className="h-full flex justify-center">
          <Timer />
        </div>
        <div>
          <h1>Innerve</h1>
        </div>
      </div>
    </div>
  );
}
