import React from "react";
import Threejs from "../Components/threejs";
import { motion } from "framer-motion";
import ossSphere from "../Components/ossSphere";
import Slider from "../Components/slider";
import HeadingMain from "../Components/HeadingMain";


export default function Dates() {
  return (
    <>
      <div className="">
        <Slider text={["Nerve to Innovate"]} theme="light" />
      </div>
      <div className="w-screen " style={{ aspectRatio: '2/1' }}>
        <Threejs />
      </div>
      <div className="w-full justify-center pb-8 mt-4">
        <HeadingMain name="Register Now" />
      </div>
    </>
  );
}
