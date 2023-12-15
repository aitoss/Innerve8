import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import InfinteLoop from "./infiniteLoop";
import Controls from "./control";
import { useState , useEffect } from "react";

export default function Threejs() {

  const [height ,setheight] = useState(window.innerHeight);
  const [width , setwidth] = useState(window.innerWidth);
  console.log(height , width);
<<<<<<< HEAD
  const [loopSize, setloopSize] = useState(width > 1340 ? Math.min(window.innerWidth, window.innerHeight) / 150 : Math.min(window.innerWidth, window.innerHeight) / 250);

  useEffect(() => {
    const handleResize = () => {
      setloopSize(width > 1340 ? Math.min(window.innerWidth, window.innerHeight) / 150 : Math.min(window.innerWidth, window.innerHeight) / 250);
      setwidth(window.innerWidth);
=======
  const [loopSize, setloopSize] = useState(Math.min(window.innerWidth, window.innerHeight) / 400);

  useEffect(() => {
    const handleResize = () => {
      setloopSize(Math.min(window.innerWidth, window.innerHeight) / 400);
>>>>>>> 2eb5852c99bff1762cc0e2f12620a19d3562aa0e
      console.log(loopSize);
      console.log(height , width);
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
<<<<<<< HEAD
        camera={{zoom:100}}
      >
        {/* <OrbitControls /> */}
        {/* <Controls /> */}
        <ambientLight intensity={2.5} />
        {/* <directionalLight position={[2, 2, 8.407]} intensity={3} /> */}
        <group position={[0 , 0 , -5]} >
          <mesh>
            <InfinteLoop scale={{ scale:loopSize ,position: 0.5 }} />
=======
        camera={{zoom:200}}
      >
        {/* <OrbitControls /> */}
        <Controls />
        {/* <ambientLight intensity={1} /> */}
        <directionalLight position={[2, 2, 8.407]} intensity={3} />
        <group position={[0 , 0.5 , 0]}>
          <mesh>
            <InfinteLoop scale={{ scale:loopSize ,position: 0.5 }} />
            
>>>>>>> 2eb5852c99bff1762cc0e2f12620a19d3562aa0e
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
