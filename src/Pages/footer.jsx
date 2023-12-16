import React from "react";
import ossSphere from "../Components/ossSphere";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import Sphere from "../Components/sphere";
import { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {

  const [width , setWidth] = useState(window.innerWidth);

  const [sphereSize, setSphereSize] = useState(
    width > 640 ? Math.min(window.innerWidth, window.innerHeight) / 350 : Math.min(window.innerWidth, window.innerHeight) / 200
  );
  useEffect(() => {
    const handleResize = () => {
      setSphereSize(Math.min(window.innerWidth, window.innerHeight) / 350);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen min-w-[320px] flex flex-col justify-center gap-12 items-center bg-gradient-to-t from-[#000000] to-[#121212] xl:gap-24 2xl-gap-32">
      <div className="w-5/6 flex justify-center flex-col mt-5 lg:flex-row lg:justify-between lg:gap-26">
        <div className=" flex flex-col lg:w-5/6 lg:mr-10">
          <div className="w-full flex gap-4 flex-col items-center lg:items-start">
            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ">
              Presented By:
            </h1>
            <div className="w-full h-[200px] sm:h-[200px]  z-100 flex justify-center md:h-[300px] lg:justify-start">
              <div className="">
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
            <div className="w-full max-w-[610px] h-0.5 bg-[#303030] rounded-full"></div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <div className="w-full flex justify-center lg:justify-start">
              <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
                Contact Us
              </h1>
            </div>
            <div className="flex flex-col gap-5 mt-5 w-full">
              <div className="w-full flex justify-between flex-col sm:flex-row">
                <p className="text-center text-md w-full lg:text-start">
                  Aakash Sharma
                </p>
                <div className="w-full flex justify-center">
                  <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-1 pl-3 cursor-pointer bg-black w-fit">
                    <p className="text-white text-sm">+91 7980558433</p>
                    <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between flex-col sm:flex-row ">
                <p className="text-center text-md w-full lg:text-start">
                  Aakash Sharma
                </p>
                <div className="w-full flex justify-center">
                  <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-1 pl-3 cursor-pointer bg-black w-fit">
                    <p className="text-white text-sm">+91 7980558433</p>
                    <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between mt-5  lg:mt-0">
          <div className="w-full ">
            <div className="w-full flex justify-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
                Innerve to Innovate
              </h1>
            </div>
            <div className="w-full  flex justify-center p-5">
              <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full p-2 cursor-pointer bg-white h-full w-fit">
                <h3 className="text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  Register Now
                </h3>
                <div className="w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full hover:rotate-45">
                  ↗
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-0.5 max-w-[610px] bg-[#303030] rounded-full"></div>
          </div>
          <div className="w-full  flex flex-col justify-center mt-5">
            <h1 className="text-white text-center text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
              Venue
            </h1>
            <div className="w-full flex justify-center">
              <div className="w-3/4 max-w-[600px] h-48  bg-white rounded-md mt-5 items-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2697840549395!2d73.87251157535849!3d18.606931466530227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1702564461426!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="down-footer flex-col flex gap-4 sticky bottom-0">
          <div className="flex flex-row justify-start space-x-6  gap-2 ">
            <div className="mx-auto w-[1px] h-8 bg-[#303030] hidden"></div>
            <div className="GitHub flex justify-start items-center gap-2">
              <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0103 0.46582C6.09245 0.46582 0.5 6.19496 0.5 13.2827C0.5 18.9483 4.08327 23.7441 9.05422 25.4415C9.67572 25.5691 9.90337 25.1657 9.90337 24.8264C9.90337 24.5293 9.88288 23.5108 9.88288 22.4496C6.40281 23.2136 5.67812 20.9217 5.67812 20.9217C5.11885 19.4363 4.29018 19.0545 4.29018 19.0545C3.15116 18.2694 4.37315 18.2694 4.37315 18.2694C5.63663 18.3543 6.29961 19.585 6.29961 19.585C7.4179 21.5371 9.2199 20.9855 9.94486 20.6459C10.0483 19.8183 10.3799 19.2454 10.732 18.9272C7.95642 18.6301 5.03613 17.5267 5.03613 12.6035C5.03613 11.203 5.53292 10.0572 6.3201 9.16604C6.1959 8.84782 5.76083 7.53194 6.44455 5.77075C6.44455 5.77075 7.50086 5.43116 9.88263 7.08637C10.9023 6.80581 11.954 6.66309 13.0103 6.66189C14.0667 6.66189 15.1435 6.81059 16.1378 7.08637C18.5198 5.43116 19.5761 5.77075 19.5761 5.77075C20.2599 7.53194 19.8245 8.84782 19.7003 9.16604C20.5083 10.0572 20.9846 11.203 20.9846 12.6035C20.9846 17.5267 18.0643 18.6087 15.2679 18.9272C15.7237 19.3303 16.1171 20.0941 16.1171 21.3038C16.1171 23.0225 16.0966 24.4019 16.0966 24.8261C16.0966 25.1657 16.3245 25.5691 16.9457 25.4418C21.9167 23.7438 25.4999 18.9483 25.4999 13.2827C25.5204 6.19496 19.9075 0.46582 13.0103 0.46582Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all hidden sm:block">
                Github
              </p>
            </div>

            <div className="mx-auto w-[1px] h-8 bg-[#303030] hidden"></div>
            <div className="Linkdin flex justify-start items-center gap-2">
              <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9875 0.46582H2.67849C2.18904 0.46582 1.71963 0.660255 1.37354 1.00635C1.02744 1.35245 0.833008 1.82185 0.833008 2.31131V23.6203C0.833008 24.1098 1.02744 24.5792 1.37354 24.9253C1.71963 25.2714 2.18904 25.4658 2.67849 25.4658H23.9875C24.477 25.4658 24.9464 25.2714 25.2925 24.9253C25.6386 24.5792 25.833 24.1098 25.833 23.6203V2.31131C25.833 1.82185 25.6386 1.35245 25.2925 1.00635C24.9464 0.660255 24.477 0.46582 23.9875 0.46582ZM8.2844 21.7627H4.52572V9.82346H8.2844V21.7627ZM6.40245 8.16895C5.9761 8.16654 5.56 8.0379 5.20669 7.79924C4.85338 7.56059 4.57867 7.22262 4.41725 6.828C4.25584 6.43337 4.21493 5.99977 4.29971 5.58192C4.38448 5.16407 4.59113 4.78069 4.89359 4.48018C5.19604 4.17966 5.58073 3.97547 5.99912 3.89338C6.41751 3.81129 6.85083 3.85498 7.24442 4.01893C7.638 4.18288 7.97419 4.45974 8.21058 4.81458C8.44696 5.16942 8.57293 5.58633 8.57259 6.0127C8.57661 6.29815 8.52312 6.58149 8.41531 6.84582C8.3075 7.11016 8.14757 7.35009 7.94506 7.55131C7.74255 7.75252 7.5016 7.91091 7.23657 8.01702C6.97155 8.12313 6.68787 8.1748 6.40245 8.16895ZM22.1386 21.7731H18.3816V15.2505C18.3816 13.3269 17.5639 12.7332 16.5084 12.7332C15.3938 12.7332 14.3 13.5735 14.3 15.2992V21.7731H10.5413V9.83214H14.1559V11.4867H14.2045C14.5674 10.7523 15.8382 9.49707 17.7775 9.49707C19.8747 9.49707 22.1403 10.7419 22.1403 14.3877L22.1386 21.7731Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all hidden sm:block">
                Linkdin
              </p>
            </div>

            <div className="mx-auto w-[1px] h-8 bg-[#303030] hidden"></div>
            <div className="Instagram flex justify-start items-center gap-2">
              <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem] hover:cursor-pointer">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6694 2.71724C16.0099 2.71724 16.4055 2.73189 17.7192 2.79049C18.9402 2.84421 19.5995 3.04933 20.039 3.22026C20.6202 3.44492 21.0402 3.71841 21.4749 4.15306C21.9144 4.5926 22.183 5.00772 22.4077 5.58889C22.5786 6.02843 22.7837 6.69262 22.8374 7.90868C22.896 9.2273 22.9107 9.62288 22.9107 12.9585C22.9107 16.299 22.896 16.6946 22.8374 18.0083C22.7837 19.2293 22.5786 19.8886 22.4077 20.3281C22.183 20.9093 21.9095 21.3293 21.4749 21.7639C21.0353 22.2035 20.6202 22.4721 20.039 22.6967C19.5995 22.8677 18.9353 23.0728 17.7192 23.1265C16.4006 23.1851 16.005 23.1998 12.6694 23.1998C9.32894 23.1998 8.93335 23.1851 7.61962 23.1265C6.39868 23.0728 5.73937 22.8677 5.29983 22.6967C4.71866 22.4721 4.29866 22.1986 3.864 21.7639C3.42446 21.3244 3.15586 20.9093 2.9312 20.3281C2.76027 19.8886 2.55515 19.2244 2.50143 18.0083C2.44283 16.6897 2.42818 16.2941 2.42818 12.9585C2.42818 9.618 2.44283 9.22241 2.50143 7.90868C2.55515 6.68774 2.76027 6.02843 2.9312 5.58889C3.15586 5.00772 3.42935 4.58772 3.864 4.15306C4.30354 3.71353 4.71866 3.44492 5.29983 3.22026C5.73937 3.04933 6.40356 2.84421 7.61962 2.79049C8.93335 2.73189 9.32894 2.71724 12.6694 2.71724ZM12.6694 0.46582C9.27522 0.46582 8.85033 0.480472 7.51706 0.539077C6.18868 0.597682 5.27541 0.812568 4.48424 1.12024C3.65889 1.44257 2.96051 1.86746 2.26701 2.56584C1.56863 3.25933 1.14375 3.95771 0.821417 4.77819C0.51374 5.57424 0.298854 6.48262 0.240249 7.81101C0.181643 9.14916 0.166992 9.57405 0.166992 12.9683C0.166992 16.3625 0.181643 16.7874 0.240249 18.1206C0.298854 19.449 0.51374 20.3623 0.821417 21.1535C1.14375 21.9788 1.56863 22.6772 2.26701 23.3707C2.96051 24.0642 3.65889 24.494 4.47936 24.8114C5.27541 25.1191 6.18379 25.334 7.51218 25.3926C8.84544 25.4512 9.27033 25.4658 12.6645 25.4658C16.0588 25.4658 16.4837 25.4512 17.8169 25.3926C19.1453 25.334 20.0586 25.1191 20.8497 24.8114C21.6702 24.494 22.3686 24.0642 23.0621 23.3707C23.7556 22.6772 24.1854 21.9788 24.5028 21.1583C24.8105 20.3623 25.0254 19.4539 25.084 18.1255C25.1426 16.7923 25.1572 16.3674 25.1572 12.9731C25.1572 9.57893 25.1426 9.15404 25.084 7.82077C25.0254 6.49239 24.8105 5.57912 24.5028 4.78795C24.1951 3.95771 23.7702 3.25933 23.0719 2.56584C22.3784 1.87235 21.68 1.44257 20.8595 1.12513C20.0635 0.817452 19.1551 0.602566 17.8267 0.543961C16.4885 0.480472 16.0637 0.46582 12.6694 0.46582Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M12.6674 6.15283C8.90442 6.15283 5.85156 9.20449 5.85156 12.966C5.85156 16.7274 8.90442 19.7791 12.6674 19.7791C16.4303 19.7791 19.4831 16.7274 19.4831 12.966C19.4831 9.20449 16.4303 6.15283 12.6674 6.15283ZM12.6674 17.3854C10.2261 17.3854 8.24616 15.4063 8.24616 12.966C8.24616 10.5257 10.2261 8.54649 12.6674 8.54649C15.1086 8.54649 17.0885 10.5257 17.0885 12.966C17.0885 15.4063 15.1086 17.3854 12.6674 17.3854Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M21.3436 5.88357C21.3436 6.76435 20.6283 7.47416 19.7523 7.47416C18.8712 7.47416 18.1611 6.75917 18.1611 5.88357C18.1611 5.00278 18.8764 4.29297 19.7523 4.29297C20.6283 4.29297 21.3436 5.00796 21.3436 5.88357Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all hidden sm:block">
                Instagram
              </p>
            </div>

            <div className="mx-auto w-[1px] h-8 bg-[#303030] hidden"></div>
            <div className="twitter flex justify-start items-center gap-2">
              <div className="flex justify-center items-center h-8 w-8 bg-[#212121] rounded-[0.375rem]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.189 0.666992H24.0225L15.6474 10.2391L25.5 23.2647H17.7855L11.7432 15.3648L4.82949 23.2647H0.993673L9.95163 13.0262L0.5 0.666992H8.41035L13.872 7.88782L20.189 0.666992ZM18.8435 20.9701H20.9677L7.25613 2.84101H4.97666L18.8435 20.9701Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="text-[#FFFFFFBF] text-xl hover:text-[#ffffffe4] hover:cursor-pointer transition-all hidden sm:block">
                Twitter
              </p>
            </div>
          </div>
          <div className="mx-auto w-full h-[1px] bg-[#303030] hidden"></div>
          <div className="w-full flex justify-center">
            <p className="text-[#FFFFFFBF] text-[12px] sm:text-sm md:text-md lg:text-lg">
              Made with ❤️ by Open Source Software Club
            </p>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="footer">
    //     <div className="front-footer w-full flex justify-center items-center bg-[#121212] gap-12 p-3">
    //       <div className="button-holder">
    //         <div className="btn flex relative items-center bg-[#F9F0E7] justify-center gap-3 border rounded-full pl-5 pr-2 py-2 cursor-pointer">
    //           <h3 className="text-[#000000] text-lg font-[400]">
    //             Register Now! Visit Devfolio
    //           </h3>
    //           <div className="w-[30px] h-[30px] bg-[#000000] flex items-center justify-center border rounded-full hover:rotate-45">
    //             ↗
    //           </div>
    //           <img
    //             src="/images/footer-spot.png"
    //             className="footer-spot z-2 hidden md:block"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="middle-footer flex flex-wrap bg-[#121212]">
    //       <div className="mx-auto w-full max-w-screen-xl">
    //         <div className="footer-grid grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
    //           <div className="flex items-center justify-center">
    //             <img
    //               src="/images/osslogo.png"
    //               className="oss-logo-footer"
    //               alt=""
    //             />
    //           </div>
    //           <div>
    //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //               Presented By
    //             </h2>
    //             <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //               <li className="mb-2">
    //                 <p className="hover:underline">Open Source Software Club</p>
    //               </li>
    //               <li className="mb-4">
    //                 <p className="hover:underline">
    //                   Army Institute Of Technology Pune
    //                 </p>
    //               </li>
    //               <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    //                   aitoss.club
    //                 </span>
    //               </button>
    //             </ul>
    //           </div>
    //           <div>
    //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //               Contact Us
    //             </h2>
    //             <div className="flex flex-col gap-5 mt-5 w-full">
    //               <div className="w-full flex flex-col">
    //                 <p className="text-md w-full lg:text-start">
    //                   Aakash Sharma
    //                 </p>
    //                 <div className="w-full flex mt-2">
    //                   <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-1 pl-3 cursor-pointer bg-black w-fit">
    //                     <p className="text-white text-sm">+91 7340785879</p>
    //                     <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
    //                       ↗
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="w-full flex flex-col">
    //                 <p className="text-md w-full lg:text-start">
    //                   Asmitha Tripathi
    //                 </p>
    //                 <div className="w-full flex mt-2">
    //                   <div className="btn flex items-center justify-center gap-3 border border-white rounded-full p-1 pl-3 cursor-pointer bg-black w-fit">
    //                     <p className="text-white text-sm">+91 7980558433</p>
    //                     <div className="w-[24px] h-[24px] flex items-center justify-center text-white border border-white rounded-full hover:rotate-45">
    //                       ↗
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div>
    //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //               Venue
    //             </h2>
    //             <iframe
    //               className="w-full h-fit"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2697840549395!2d73.87251157535849!3d18.606931466530227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1702564461426!5m2!1sen!2sin"
    //             ></iframe>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lower-footer bg-[#000000]">
    //       <div className="px-4 py-6 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto">
    //         <span className="text-sm sm:text-center">
    //           Made with ♥ by Open Source Software Club
    //         </span>
    //         <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
    //           <a
    //             href="#"
    //             className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 8 19"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span className="sr-only">Facebook page</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 21 16"
    //             >
    //               <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    //             </svg>
    //             <span className="sr-only">Discord community</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 20 17"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span className="sr-only">Twitter page</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span className="sr-only">GitHub account</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span className="sr-only">Dribbble account</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
