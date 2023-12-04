import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-1/6">
        <Nav />
      </div>
      <div className="absolute w-full flex justify-center">
        <img src={Dots} alt="dots" />
      </div>
      <div className="w-full flex flex-col h-screen">
        <div className="flex flex-col w-full h-1/2 items-center">
            <p className="text-black text-5xl md:text-lg">India's biggest student driven hackathon</p>
            <p className="text-black text-5xl md:text-lg">happening in</p>
        </div>
      </div>
    </div>
  );
}
