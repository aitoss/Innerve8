import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Infinity from "../../infiniteLoop";

export default function Threejs() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 0], fov: 120 }}>
        {/* Uncomment the line below if you want to use OrbitControls */}
        <OrbitControls enableZoom={true} />
        {/* <ambientLight intensity={11} /> */}
        <directionalLight position={[2, 2, 8.407]} intensity={3} />
        <group position={[14, -7.5, -35]}>
          <mesh>
            {/* <LaptopModel scale={{ scale: 1, position: 0.5 }} /> */}
            <Infinity scale={{ scale:4, position: 0.5 }} />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
