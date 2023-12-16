import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import InfinteLoop from "./infiniteLoop";
import Controls from "./control";
import { useState, useEffect } from "react";

export default function Threejs() {

  const [height, setheight] = useState(window.innerHeight);
  const [width, setwidth] = useState(window.innerWidth);
  console.log(height, width);
  const [loopSize, setloopSize] = useState(width > 1340 ? Math.min(window.innerWidth, window.innerHeight) / 150 : Math.min(window.innerWidth, window.innerHeight) / 250);

  useEffect(() => {
    const handleResize = () => {
      setloopSize(width > 1340 ? Math.min(window.innerWidth, window.innerHeight) / 150 : Math.min(window.innerWidth, window.innerHeight) / 250);
      setwidth(window.innerWidth);
      console.log(loopSize);
      console.log(height, width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        orthographic={true}
        camera={{ zoom: 100 }}
      >
        {/* <OrbitControls /> */}
        {/* <Controls /> */}
        <ambientLight intensity={2.5} />
        {/* <directionalLight position={[2, 2, 8.407]} intensity={3} /> */}
        <group position={[0, 0, -5]} >
          <mesh>
            <InfinteLoop scale={{ scale: loopSize, position: 0.5 }} />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
