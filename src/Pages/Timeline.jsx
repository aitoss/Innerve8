import React from "react";
import DarkSlider from "../Components/darkSlider";
import HeadingMainBlack from "../Components/HeadingMainBlack";
// import "./timeline.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import InnerveModel from "../Components/innerve3d";
import { useState, useEffect } from "react";
import Controls from "../Components/control";
const Timeline = () => {
  // const progressbar = document.querySelector("progress");
  // const article = document.querySelector("article");

  // let isScrolling = false;

  // document.addEventListener("scroll", (e) => (isScrolling = true));

  // render();

  // function render() {
  //   requestAnimationFrame(render);

  //   if (!isScrolling) return;

  //   progressbar.value =
  //     (window.scrollY / (article.offsetHeight - window.innerHeight)) * 100;

  //   isScrolling = false;
  // }

  const [loopSize, setloopSize] = useState(
    Math.min(window.innerWidth, window.innerHeight) / 400
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setloopSize(Math.min(window.innerWidth, window.innerHeight) / 400);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / totalHeight) * 1;
    setProgress(scrollPercentage);
    console.log(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(progress);
    return () => {
      console.log(progress);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="pt-2">
        <div className="bg-[#121212] text-white relative pt-4">
          <DarkSlider text={["Timeline"]} />
          <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2 ">
                Dive deep
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-4 ">
                Here’s your guide to Innerve 8. Go through all the steps.
              </p>
              {/* <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Know more
              </a> */}
              <div className="h-[500px] mt-12 hidden lg:block z-50">
                <Canvas orthographic={true} camera={{ zoom: 50 }}>
                  <OrbitControls
                    autoRotate={true}
                    rotateSpeed={0.5}
                    enableZoom={false}
                  />

                {/* <CameraShake
                    // controls={{
                    //   current: '[Circular]'
                    // }}
                    maxPitch={0.05}
                    maxRoll={0.05}
                    maxYaw={0.05}
                    pitchFrequency={0.8}
                    rollFrequency={0.8}
                    yawFrequency={0.8}
                  /> */}

                  {/* <Controls /> */}
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[-8, -1, 5]} intensity={1} />
                  <directionalLight position={[6, 1.9, -1]} intensity={1} />
                  <directionalLight position={[-7, 2, -7]} intensity={1} />

                  {/* <directionalLight position={[0, 5, 0]} intensity={1} />
                              <directionalLight position={[0, -5, 0]} intensity={1} /> */}

                  {/* <directionalLight position={[10, 0, 0]} intensity={1} />
                              <directionalLight position={[-10, 0, 0]} intensity={1} /> */}

                  <group position={[0, -0.5, 0]}>
                    <mesh>
                      <InnerveModel
                        scale={{ scale: loopSize, position: 0.5 }}
                      />
                    </mesh>
                  </group>
                </Canvas>
              </div>
              {/* <img src="/images/V5.png" alt="" /> */}
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  {/* <progress min="0" max="100" value="0"></progress> */}

                  <div
                    className="border-2-2 border-[#F5AEDD] hidden lg:block absolute h-full border transition-opacity duration-300"
                    style={{
                      right: "50%",
                      border: "2px solid #F5AEDD",
                      borderRadius: "1%",
                      background:
                        "var(--pink, linear-gradient(to left, #743ad5, #d53a9d)",
                    }}
                  ></div>
                    <div
                    className="border-2-2 border-[#F5AEDD] block lg:hidden absolute h-full border transition-opacity duration-300"
                    style={{
                      left: "5%",
                      border: "2px solid #F5AEDD",
                      borderRadius: "1%",
                      background:
                        "var(--pink, linear-gradient(to left, #743ad5, #d53a9d)",
                    }}
                  ></div>
                  {/* <div
                    className="border-2-2 border-[#F5AEDD] absolute h-full border transition-opacity duration-300"
                    style={{
                      right: "50%",
                      border: "2px solid #F5AEDD",
                      borderRadius: "1%",
                      background: "linear-gradient(to left, #743ad5, #d53a9d)",
                      width: "4px", 
                      height: `${progress}%`, 
                      // transition: "height 0.1s ease", 
                    }}
                  ></div> */}

                  {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text- text-[#D9D9D9]">15 Dec, 2023</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Registration Starts
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Secure your spot starting December 15, 2023, at 12:00 AM
                        IST. Join us for an exciting 24-hour hackathon by
                        registering early!
                      </p>
                    </div>
                  </div> */}

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        15 Dec, 2023
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Registration Starts
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Secure your spot starting December 15, 2023, at 12:00 AM
                        IST. Join us for an exciting 24-hour hackathon by
                        registering early!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 lg:hidden flex-col flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-left">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        15 Jan, 2024
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Registration Ends
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Last date to register for the hackathon!. Don't miss out
                        on this opportunity—finalize your participation before
                        it's too late!{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 lg:flex hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-left">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        15 Jan, 2024
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Registration Ends
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Last date to register for the hackathon!. Don't miss out
                        on this opportunity—finalize your participation before
                        it's too late!{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        25 Jan, 2024
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Pre-Innerve Games
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Embark on an exciting Pre-Innerve game designed
                        exclusively for first-year students!
                      </p>
                    </div>
                  </div>

                  {/* <div className="border-white hover:border-black no-underline">
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4">
                        <p className="mb-3 text-xl text-[#D9D9D9]">
                          25 Jan, 2024
                        </p>
                        <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                          Pre-Innerve Game-2
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                          Embark on an exciting Pre-Innerve game designed
                          exclusively for first-year students!
                        </p>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        25 Jan, 2024
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Pre-Innerve Game-3
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Embark on an exciting Pre-Innerve game designed
                        exclusively for first-year students!
                      </p>
                    </div>
                  </div> */}

                  <div className="mb-8 lg:hidden flex flex-col justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        8 Feb, 2024 6:00 PM - 10:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Participant Check-in and Onboarding
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Engage in a warm welcome, thorough orientation, and the
                        distribution of essential welcome kits as we kick off
                        the hackathon experience.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 lg:flex hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        8 Feb, 2024 6:00 PM - 10:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Participant Check-in and Onboarding
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Engage in a warm welcome, thorough orientation, and the
                        distribution of essential welcome kits as we kick off
                        the hackathon experience.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        9 Feb, 2024 10:00 AM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left lg:text-right">
                        Hackathon Begins
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Get ready to code, innovate, and collaborate! The
                        Hackathon journey begins—ideas soar, projects flourish,
                        success celebrated
                      </p>
                    </div>
                  </div>

                  <div className="border-white hover:border-black no-underline">
                    <div className="mb-8 flex lg:hidden flex-col justify-between items-center w-full right-timeline">
                      <div className="order-1 w-8/12 lg:w-5/12"></div>
                      <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4">
                        <p className="mb-3 text-xl text-[#D9D9D9]">
                          9 Feb, 2024 05:00 PM - 07:00 PM
                        </p>
                        <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                          Mentorship Session
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                          Get personalized guidance from experienced mentors in
                          a dedicated session.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-white hover:border-black no-underline">
                    <div className="mb-8 hidden lg:flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-8/12 lg:w-5/12"></div>
                      <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4">
                        <p className="mb-3 text-xl text-[#D9D9D9]">
                          9 Feb, 2024 05:00 PM - 07:00 PM
                        </p>
                        <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                          Mentorship Session
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                          Get personalized guidance from experienced mentors in
                          a dedicated session.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 12:00 AM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Midnight Jam and Energizer
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Fuel your creativity with our Midnight Jam—a lively
                        session featuring energizing activities and music.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex flex-col lg:hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 10:00 AM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                        Coding hours end
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Wrap up your coding journey, take a breather, and gear
                        up for the project submission phase.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 lg:flex hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 10:00 AM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                        Coding hours end
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Wrap up your coding journey, take a breather, and gear
                        up for the project submission phase.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 12:00 PM - 5:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                        Judging Round
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Step into the spotlight as you present your projects in
                        the judging round. Showcase your innovation.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 lg:flex hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 6:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                        Final Presentation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        The moment you've been waiting for is here! Discover the
                        hackathon winners and celebrate the outstanding
                        achievements of participants.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex-col flex lg:hidden justify-between items-center w-full right-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1  w-8/12 lg:w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 6:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                        Final Presentation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        The moment you've been waiting for is here! Discover the
                        hackathon winners and celebrate the outstanding
                        achievements of participants.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-col lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-8/12 lg:w-5/12"></div>
                    <div className="order-1 w-8/12 lg:w-5/12 px-1 py-4 text-left lg:text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                      10 Feb, 2024 7:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">
                      Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        The moment you've been waiting for is here! Discover the
                        hackathon winners and celebrate the outstanding
                        achievements of participants.
                      </p>
                    </div>
                  </div>

                  {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">
                        10 Feb, 2024 5:00 PM
                      </p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        The moment you've been waiting for is here! Discover the
                        hackathon winners and celebrate the outstanding
                        achievements of participants.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative justify-center">
            <HeadingMainBlack name="Timeline" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
