import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import Sphere from './sphere';
import { useEffect } from 'react';

const ossSphere = () => {

  let sphereSize = Math.min(window.innerWidth, window.innerHeight) / 400;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("scrolling");
  //     console.log(window.scrollY);
  //     // Sphere.rotation.x = window.scrollY * 0.01;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      // Update sphereSize based on new window dimensions
      sphereSize = Math.min(window.innerWidth, window.innerHeight) / 400;
      console.log(sphereSize);
      console.log("Resizing");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(sphereSize);
    };

  }, []);

  return (
    <>
      <Canvas
      // orthographic={true}
      // camera={{zoom: 50 }}
      // Adjust the camera position
      // fog={new THREE.Fog("rgb(5, 15, 45)", 5, 15)} // Add fog to the scene
      >
        {/* <directionalLight position={[0.028, 4.895, 8.407]} /> */}
        <ambientLight intensity={10} />

        <Sphere position={[0, 0, 0]} args={[sphereSize, 32, 32]} color={"green"} text="Three JS" />
        <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={4} />
      </Canvas>
    </>
  );
};

export default ossSphere;
