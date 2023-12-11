import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Infinity from "./infiniteLoop";
import Controls from "./control";

export default function Threejs() {
  return (
    <div className="w-full h-full">
      <Canvas 
      orthographic={true}
      camera={{zoom:150}}
      >
        {/* Uncomment the line below if you want to use OrbitControls */}
        {/* <OrbitControls enableZoom={false} /> */}
        {/* <Controls /> */}
        {/* <ambientLight intensity={} /> */}
        <directionalLight position={[0.234, 3.776, 7.500]} intensity={1} />
        <pointLight position={[0.465, 2.915, 5.777]} intensity={1} />
        <pointLight position={[0.067, 2.813, 5.720]} intensity={1} />
        <group 
        position={[17.5, -10.5, -25]}
        >
          <mesh>
            <Infinity scale={{ scale:4, position: 0.5 }} />
          </mesh>
        </group>
        {/* <group position={[0, 0 , 0]}>
          <mesh>
            <sphereGeometry args={[64, 32, 32]}/>
            <meshStandardMaterial color="black" />
          </mesh>
        </group> */}
      </Canvas>
    </div>
  );
}
