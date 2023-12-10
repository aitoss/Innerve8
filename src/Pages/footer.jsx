import React from "react";
import ossSphere from "../Components/ossSphere";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import Sphere from "../Components/sphere";
import { useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {

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
    <div className="w-screen h-screen flex flex-col justify-center items-center relative bg-black">
      <div className="w-5/6 h-4/6 absolute top-2 flex justify-between">
        <div className=" h-full w-2/6">
          <div className="w-full h-4/6 ">
            <h1 className="text-white md:text-3xl lg:text-4xl xl:text-5xl">
              Presented By:
            </h1>
            <div className="w-full h-5/6 z-100 flex justify-start ">
                <div>
              <Canvas
              // orthographic={true}
              // camera={{zoom: 50 }}
              // Adjust the camera position
              // fog={new THREE.Fog("rgb(5, 15, 45)", 5, 15)} // Add fog to the scene
              >
                {/* <directionalLight position={[0.028, 4.895, 8.407]} /> */}
                <ambientLight intensity={5} />

                <Sphere
                  position={[0, 0, 0]}
                  args={[sphereSize, 32, 32]}
                  color={"green"}
                  text="Three JS"
                />
                <OrbitControls
                  enableZoom={false}
                  autoRotate={true}
                  // rotateSpeed={1}
                />
              </Canvas>
              </div>
            </div>
          </div>
          <div className="w-full h-2/6 ">
            <div className="w-full h-1/2 ">
              <h1>Contact Us</h1>
            </div>
            <div className="w-full h-1/2">
              <div className="w-full h-1/2  flex justify-between">
                <p className="text-xl">Aakash Sharma</p>
                <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-2 cursor-pointer bg-black h-3/4 w-fit">
                  <h3 className="text-white text-lg">+91 7980558433</h3>
                  <div className="w-[30px] h-[30px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
                    ↗
                  </div>
                </div>
              </div>
              <div className="w-full h-1/2 flex justify-between">
                <p className="text-xl">Asmita Tripathi</p>
                <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-2 cursor-pointer bg-black h-3/4 w-fit">
                  <h3 className="text-white text-lg">+91 7980558433</h3>
                  <div className="w-[30px] h-[30px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-3/6 flex flex-col justify-between">
          <div className="w-full h-2/6">
            <div className="w-full h-2/4">
              <h1>Innerve to Innovate</h1>
            </div>
            <div>
              <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full p-2 cursor-pointer bg-white h-full w-fit">
                <h3 className="text-[#212121] text-2xl">Register Now</h3>
                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full hover:rotate-45">
                  ↗
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-3/6 flex flex-col justify-between">
            <h1>Venue</h1>
            <div className="w-full h-4/6 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-1/6 absolute bottom-6">
        <div>
        <div className="down-footer flex-col flex justify-center items-center">
            <div className="flex flex-row justify-center space-x-6 items-center">
        <FaGithub  className="text-6xl  p-2  rounded-full" />
        <p className="text-white px-2 text-[22px]">Github</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <FaLinkedin  className="text-6xl  p-2  " />
        <p className="text-white px-2 text-[22px]">LinkedIn</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <FaInstagram  className="text-6xl  p-2 " />
        <p className="text-white px-2 text-[22px]">Instagram</p>
        <div className="mx-auto w-1 h-16 bg-[#303030] "></div>    
        <FaXTwitter  className="text-6xl  p-2 " />
        <p className="text-white px-2 text-[22px]">Twitter</p>
            </div>
            <div>
            <p className="text-[28px] py-4">Made with ❤️ by Open Source Software Club</p>
            </div>
        </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
