import React from "react";
import { useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Infinity from "./infiniteLoop";
import Controls from "./control";

function calculateZoom(size) {
  let zoomLevel;

  if (size <= 1400) {
    zoomLevel = 30 + ((size - 400) / (1400 - 400)) * (150 - 30);
    zoomLevel = Math.max(30, Math.min(zoomLevel, 150));
  } else {
    zoomLevel = 150;
  }

  return zoomLevel;
}

export default function Threejs() {

  const [zoom, setZoom] = useState(calculateZoom(window.innerWidth));
  useEffect(() => {
    function handleResize() {
      setZoom(calculateZoom(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Canvas className=""
      orthographic={true}
      camera={{zoom:zoom}}
      >
        {/* Uncomment the line below if you want to use OrbitControls */}
        {/* <OrbitControls enableZoom={false} /> */}
        {/* <Controls /> */}
        {/* <ambientLight intensity={} /> */}
        <directionalLight position={[0.234, 3.776, 7.500]} intensity={1} />
        <pointLight position={[0.465, 2.915, 5.777]} intensity={1} />
        <pointLight position={[0.067, 2.813, 5.720]} intensity={1} />
        <group 
        position={[17.5, -11, -25]}
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
  );
}
