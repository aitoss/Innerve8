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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log(sphereSize);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-12 bg-gradient-to-t from-[#000000] to-[#121212]">
      <div className="w-5/6 h-4/6 flex justify-between">
        <div className=" h-full w-2/6 flex flex-col">
          <div className="w-full h-4/6 ">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Presented By:
            </h1>
            <div className="w-full h-5/6 z-100 flex justify-start">
              <div>
                <Canvas
                // orthographic={true}
                // camera={{zoom: 50 }}
                // Adjust the camera position
                // fog={new THREE.Fog("rgb(5, 15, 45)", 5, 15)} // Add fog to the scene
                >
                  {/* <directionalLight position={[0.028, 4.895, 8.407]} /> */}
                  <ambientLight intensity={7} />

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
            <div className="w-full h-0.5 bg-[#303030] rounded-full"></div>
          </div>
          <div className="w-full h-2/6">
            <div className="w-full h-1/2">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Contact Us</h1>
            </div>
            <div className="flex flex-col gap-5 mt-2">
              <div className="w-full flex justify-center flex-col xl:flex-row xl:justify-between">
                <p className="text-xl text-center">Aakash Sharma</p>
                <div className="btn flex items-center justify-center gap-2 border border-white rounded-full p-1 cursor-pointer bg-black">
                  <h3 className="text-white text-sm">+91 7980558433</h3>
                  <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
                    ↗
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col xl:flex-row xl:justify-between">
                <p className="text-xl text-center">Aakash Sharma</p>
                <div className="btn flex items-center justify-center gap-2 border border-white rounded-full p-1 cursor-pointer bg-black">
                  <h3 className="text-white text-sm">+91 7980558433</h3>
                  <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
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
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Innerve to Innovate</h1>
            </div>
            <div className="w-full">
              <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full p-2 cursor-pointer bg-white h-full w-fit mt-10">
                <h3 className="text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">Register Now</h3>
                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full hover:rotate-45">
                  ↗
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#303030] rounded-full"></div>
          <div className="w-full h-3/6 flex flex-col justify-between">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Venue</h1>
            <div className="w-full h-4/6 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-1/6 mt-10">
        <div>
          <div className="down-footer flex-col flex justify-center items-center gap-4 mt-5">
            <div className="flex flex-row justify-center space-x-6 items-center ">

              <div className="mx-auto w-[1px] h-8 bg-[#303030] "></div>
              <div className="GitHub flex justify-center items-center gap-2">
                <a href="" className="flex flex-row w-fit  justify-center">
                <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.0103 0.46582C6.09245 0.46582 0.5 6.19496 0.5 13.2827C0.5 18.9483 4.08327 23.7441 9.05422 25.4415C9.67572 25.5691 9.90337 25.1657 9.90337 24.8264C9.90337 24.5293 9.88288 23.5108 9.88288 22.4496C6.40281 23.2136 5.67812 20.9217 5.67812 20.9217C5.11885 19.4363 4.29018 19.0545 4.29018 19.0545C3.15116 18.2694 4.37315 18.2694 4.37315 18.2694C5.63663 18.3543 6.29961 19.585 6.29961 19.585C7.4179 21.5371 9.2199 20.9855 9.94486 20.6459C10.0483 19.8183 10.3799 19.2454 10.732 18.9272C7.95642 18.6301 5.03613 17.5267 5.03613 12.6035C5.03613 11.203 5.53292 10.0572 6.3201 9.16604C6.1959 8.84782 5.76083 7.53194 6.44455 5.77075C6.44455 5.77075 7.50086 5.43116 9.88263 7.08637C10.9023 6.80581 11.954 6.66309 13.0103 6.66189C14.0667 6.66189 15.1435 6.81059 16.1378 7.08637C18.5198 5.43116 19.5761 5.77075 19.5761 5.77075C20.2599 7.53194 19.8245 8.84782 19.7003 9.16604C20.5083 10.0572 20.9846 11.203 20.9846 12.6035C20.9846 17.5267 18.0643 18.6087 15.2679 18.9272C15.7237 19.3303 16.1171 20.0941 16.1171 21.3038C16.1171 23.0225 16.0966 24.4019 16.0966 24.8261C16.0966 25.1657 16.3245 25.5691 16.9457 25.4418C21.9167 23.7438 25.4999 18.9483 25.4999 13.2827C25.5204 6.19496 19.9075 0.46582 13.0103 0.46582Z" fill="#D9D9D9" />
                  </svg>

                </div>
                <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all">GitHub</p>
                </a>
              </div>

              <div className="mx-auto w-[1px] h-8 bg-[#303030] "></div>
              <div className="Linkdin flex justify-center items-center gap-2">
                <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9875 0.46582H2.67849C2.18904 0.46582 1.71963 0.660255 1.37354 1.00635C1.02744 1.35245 0.833008 1.82185 0.833008 2.31131V23.6203C0.833008 24.1098 1.02744 24.5792 1.37354 24.9253C1.71963 25.2714 2.18904 25.4658 2.67849 25.4658H23.9875C24.477 25.4658 24.9464 25.2714 25.2925 24.9253C25.6386 24.5792 25.833 24.1098 25.833 23.6203V2.31131C25.833 1.82185 25.6386 1.35245 25.2925 1.00635C24.9464 0.660255 24.477 0.46582 23.9875 0.46582ZM8.2844 21.7627H4.52572V9.82346H8.2844V21.7627ZM6.40245 8.16895C5.9761 8.16654 5.56 8.0379 5.20669 7.79924C4.85338 7.56059 4.57867 7.22262 4.41725 6.828C4.25584 6.43337 4.21493 5.99977 4.29971 5.58192C4.38448 5.16407 4.59113 4.78069 4.89359 4.48018C5.19604 4.17966 5.58073 3.97547 5.99912 3.89338C6.41751 3.81129 6.85083 3.85498 7.24442 4.01893C7.638 4.18288 7.97419 4.45974 8.21058 4.81458C8.44696 5.16942 8.57293 5.58633 8.57259 6.0127C8.57661 6.29815 8.52312 6.58149 8.41531 6.84582C8.3075 7.11016 8.14757 7.35009 7.94506 7.55131C7.74255 7.75252 7.5016 7.91091 7.23657 8.01702C6.97155 8.12313 6.68787 8.1748 6.40245 8.16895ZM22.1386 21.7731H18.3816V15.2505C18.3816 13.3269 17.5639 12.7332 16.5084 12.7332C15.3938 12.7332 14.3 13.5735 14.3 15.2992V21.7731H10.5413V9.83214H14.1559V11.4867H14.2045C14.5674 10.7523 15.8382 9.49707 17.7775 9.49707C19.8747 9.49707 22.1403 10.7419 22.1403 14.3877L22.1386 21.7731Z" fill="#D9D9D9" />
                  </svg>

                </div>
                <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all">Linkdin</p>
              </div>

              <div className="mx-auto w-[1px] h-8 bg-[#303030] "></div>
              <div className="Instagram flex justify-center items-center gap-2">
                <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem] hover:cursor-pointer">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6694 2.71724C16.0099 2.71724 16.4055 2.73189 17.7192 2.79049C18.9402 2.84421 19.5995 3.04933 20.039 3.22026C20.6202 3.44492 21.0402 3.71841 21.4749 4.15306C21.9144 4.5926 22.183 5.00772 22.4077 5.58889C22.5786 6.02843 22.7837 6.69262 22.8374 7.90868C22.896 9.2273 22.9107 9.62288 22.9107 12.9585C22.9107 16.299 22.896 16.6946 22.8374 18.0083C22.7837 19.2293 22.5786 19.8886 22.4077 20.3281C22.183 20.9093 21.9095 21.3293 21.4749 21.7639C21.0353 22.2035 20.6202 22.4721 20.039 22.6967C19.5995 22.8677 18.9353 23.0728 17.7192 23.1265C16.4006 23.1851 16.005 23.1998 12.6694 23.1998C9.32894 23.1998 8.93335 23.1851 7.61962 23.1265C6.39868 23.0728 5.73937 22.8677 5.29983 22.6967C4.71866 22.4721 4.29866 22.1986 3.864 21.7639C3.42446 21.3244 3.15586 20.9093 2.9312 20.3281C2.76027 19.8886 2.55515 19.2244 2.50143 18.0083C2.44283 16.6897 2.42818 16.2941 2.42818 12.9585C2.42818 9.618 2.44283 9.22241 2.50143 7.90868C2.55515 6.68774 2.76027 6.02843 2.9312 5.58889C3.15586 5.00772 3.42935 4.58772 3.864 4.15306C4.30354 3.71353 4.71866 3.44492 5.29983 3.22026C5.73937 3.04933 6.40356 2.84421 7.61962 2.79049C8.93335 2.73189 9.32894 2.71724 12.6694 2.71724ZM12.6694 0.46582C9.27522 0.46582 8.85033 0.480472 7.51706 0.539077C6.18868 0.597682 5.27541 0.812568 4.48424 1.12024C3.65889 1.44257 2.96051 1.86746 2.26701 2.56584C1.56863 3.25933 1.14375 3.95771 0.821417 4.77819C0.51374 5.57424 0.298854 6.48262 0.240249 7.81101C0.181643 9.14916 0.166992 9.57405 0.166992 12.9683C0.166992 16.3625 0.181643 16.7874 0.240249 18.1206C0.298854 19.449 0.51374 20.3623 0.821417 21.1535C1.14375 21.9788 1.56863 22.6772 2.26701 23.3707C2.96051 24.0642 3.65889 24.494 4.47936 24.8114C5.27541 25.1191 6.18379 25.334 7.51218 25.3926C8.84544 25.4512 9.27033 25.4658 12.6645 25.4658C16.0588 25.4658 16.4837 25.4512 17.8169 25.3926C19.1453 25.334 20.0586 25.1191 20.8497 24.8114C21.6702 24.494 22.3686 24.0642 23.0621 23.3707C23.7556 22.6772 24.1854 21.9788 24.5028 21.1583C24.8105 20.3623 25.0254 19.4539 25.084 18.1255C25.1426 16.7923 25.1572 16.3674 25.1572 12.9731C25.1572 9.57893 25.1426 9.15404 25.084 7.82077C25.0254 6.49239 24.8105 5.57912 24.5028 4.78795C24.1951 3.95771 23.7702 3.25933 23.0719 2.56584C22.3784 1.87235 21.68 1.44257 20.8595 1.12513C20.0635 0.817452 19.1551 0.602566 17.8267 0.543961C16.4885 0.480472 16.0637 0.46582 12.6694 0.46582Z" fill="#D9D9D9" />
                    <path d="M12.6674 6.15283C8.90442 6.15283 5.85156 9.20449 5.85156 12.966C5.85156 16.7274 8.90442 19.7791 12.6674 19.7791C16.4303 19.7791 19.4831 16.7274 19.4831 12.966C19.4831 9.20449 16.4303 6.15283 12.6674 6.15283ZM12.6674 17.3854C10.2261 17.3854 8.24616 15.4063 8.24616 12.966C8.24616 10.5257 10.2261 8.54649 12.6674 8.54649C15.1086 8.54649 17.0885 10.5257 17.0885 12.966C17.0885 15.4063 15.1086 17.3854 12.6674 17.3854Z" fill="#D9D9D9" />
                    <path d="M21.3436 5.88357C21.3436 6.76435 20.6283 7.47416 19.7523 7.47416C18.8712 7.47416 18.1611 6.75917 18.1611 5.88357C18.1611 5.00278 18.8764 4.29297 19.7523 4.29297C20.6283 4.29297 21.3436 5.00796 21.3436 5.88357Z" fill="#D9D9D9" />
                  </svg>

                </div>
                <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all">Instagram</p>
              </div>

              <div className="mx-auto w-[1px] h-8 bg-[#303030] "></div>
              <div className="twitter flex justify-center items-center gap-2">
                <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.189 0.666992H24.0225L15.6474 10.2391L25.5 23.2647H17.7855L11.7432 15.3648L4.82949 23.2647H0.993673L9.95163 13.0262L0.5 0.666992H8.41035L13.872 7.88782L20.189 0.666992ZM18.8435 20.9701H20.9677L7.25613 2.84101H4.97666L18.8435 20.9701Z" fill="#D9D9D9" />
                  </svg>
                </div>
                <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all">Twitter</p>
              </div>
            </div>
            <div className="mx-auto w-full h-[1px] bg-[#303030] "></div>
            <div>
              <p className="text-[#FFFFFFBF] text-xl">Made with ❤️ by Open Source Software Club</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
