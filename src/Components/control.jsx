import { OrbitControls } from "@react-three/drei";
import React,{ useEffect } from "react";
import * as THREE from "three";
import { useThree ,useFrame} from "@react-three/fiber";

export default function Controls() {
    const { camera } = useThree();

    useFrame(() => {
        camera.position.lerp(new THREE.Vector3(0, 0, 2), 0.5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        camera.updateProjectionMatrix();
      });

    return (
      <>
        <OrbitControls
          camera={camera}
          enableZoom={false}
          enablePan={false}
        //   onEnd={() => camera.position.set(40, 0, 0)}
        />
      </>
    );
}