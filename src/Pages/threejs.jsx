import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Infinity from "../../infiniteLoop";


export default function Threejs() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        {/* <OrbitControls  enableZoom={false} /> */}
        {/* <ambientLight intensity={10} /> */}
        <directionalLight position={[1, 1, 6]} intensity={4} />
        <group position={[14 , -7 , -14]}>
          <mesh>
            {/* <LaptopModel scale={{ scale: 1, position: 0.5 }} /> */}
            <Infinity scale={{ scale: 3, position: 0.5 }} />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}