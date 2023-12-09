import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Infinity from "../../infiniteLoop";


export default function Threejs() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        {/* <OrbitControls  enableZoom={false} /> */}
        {/* <ambientLight intensity={10} /> */}
        <directionalLight position={[2, 2, 8.407]} intensity={3} />
        <group position={[14 , -7.5 , -13]}>
          <mesh>
            {/* <LaptopModel scale={{ scale: 1, position: 0.5 }} /> */}
            <Infinity scale={{ scale: 3, position: 0.5 }} />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}