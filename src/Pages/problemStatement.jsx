import React, { useState, useEffect } from "react";
// import Threejs from "../Components/threejs";
import { motion } from "framer-motion";
import ossSphere from "../Components/ossSphere";
import Slider from "../Components/slider";
import HeadingMob from "../Components/HeadingMob";
import HeadingMain from "../Components/HeadingMain";
import ComingSoon from "../assets/images/comingSoon.svg";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function ProblemStatement() {
  const [width, setWidth] = useState(window.innerWidth);

  const [sphereSize, setSphereSize] = useState(
    width > 640 ? Math.min(window.innerWidth, window.innerHeight) / 320 : 3
  );
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setSphereSize(
        width > 640 ? Math.min(window.innerWidth, window.innerHeight) / 320 : 3
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="">
        <Slider text={["Problem Statement"]} theme="light" />
      </div>

      <div className="w-full justify-center pb-8 mt-4">
        <HeadingMob name="Statement" />
      </div>
      <div className="w-screen flex justify-center">
        <div className="w-3/4 my-5">
          <Canvas>
            <OrbitControls
              autoRotate={true}
              rotateSpeed={0.5}
              enableZoom={false}
            />
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[sphereSize, 64, 32]} />
              <MeshWobbleMaterial color={"grey"} factor={50} speed={2} />
            </mesh>
          </Canvas>
        </div>
      </div>
      <div className="flex relative top-[4rem] justify-center">
        <HeadingMain name="Problem Statement" />
      </div>
    </>
  );
}
