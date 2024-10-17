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
      <section className="pt-2" id="timeline">
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
              <div className="h-[500px] mt-8 hidden lg:block z-50">
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
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

              {/* Item #1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Registration Starts</div>
                    <time className="font-caveat font-medium text-gray-400">15 Dec, 2025</time>
                  </div>
                  <div className="text-slate-500">Secure your spot starting December 15, 2024, at 12:00 AM
                    IST. Join us for an exciting 24-hour hackathon by
                    registering early!</div>
                </div>
              </div>

              {/* Item #2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Registration Ends</div>
                    <time className="font-caveat font-medium text-gray-400">20 Jan, 2025</time>
                  </div>
                  <div className="text-slate-500">Last date to register for the hackathon!. Don't miss out
                    on this opportunity—finalize your participation before
                    it's too late!{" "}</div>
                </div>
              </div>

              {/* Item #3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Pre-Innerve Games</div>
                    <time className="font-caveat font-medium text-gray-400">25 Jan, 2025</time>
                  </div>
                  <div className="text-slate-500">Embark on an exciting Pre-Innerve game designed
                    exclusively for first-year students!</div>
                </div>
              </div>

              {/* Item #4 */}


              {/* Item #5 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Participant Check-in</div>
                    <time className="font-caveat font-medium text-gray-400">7 Feb, 2025 6:00 PM</time>
                  </div>
                  <div className="text-slate-500">Engage in a warm welcome, thorough orientation, and the
                    distribution of essential welcome kits as we kick off
                    the hackathon experience.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Hackathon Begins</div>
                    <time className="font-caveat font-medium text-gray-400"> 8 Feb, 2025 10:00 AM</time>
                  </div>
                  <div className="text-slate-500">Get ready to code, innovate, and collaborate! The
                    Hackathon journey begins—ideas soar, projects flourish,
                    success celebrated</div>
                </div>
              </div>


              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Mentorship Session</div>
                    <time className="font-caveat font-medium text-gray-400">8 Feb, 2025 05:00 PM</time>
                  </div>
                  <div className="text-slate-500">Get personalized guidance from experienced mentors in
                    a dedicated session.{" "}</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Midnight Jam and Energizer</div>
                    <time className="font-caveat font-medium text-gray-400">9 Feb, 2025 12:00 AM</time>
                  </div>
                  <div className="text-slate-500">Fuel your creativity with our Midnight Jam—a lively
                    session featuring energizing activities and music.</div>
                </div>
              </div>


              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Coding hours end</div>
                    <time className="font-caveat font-medium text-gray-400">9 Feb, 2025 10:00 AM</time>
                  </div>
                  <div className="text-slate-500">Wrap up your coding journey, take a breather, and gear
                    up for the project submission phase.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Judging Round</div>
                    <time className="font-caveat font-medium text-gray-400">9 Feb, 2025 12:00 PM</time>
                  </div>
                  <div className="text-slate-500">Step into the spotlight as you present your projects in
                    the judging round. Showcase your innovation.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Final Presentation</div>
                    <time className="font-caveat font-medium text-gray-400">9 Feb, 2025 6:00 PM</time>
                  </div>
                  <div className="text-slate-500">The moment you've been waiting for is here! Discover the
                    hackathon winners and celebrate the outstanding
                    achievements of participants.</div>
                </div>
              </div>


              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-[#3E1AB4]" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Result Declaration</div>
                    <time className="font-caveat font-medium text-gray-400">9 Feb, 2025 7:00 PM</time>
                  </div>
                  <div className="text-slate-500">The moment you've been waiting for is here! Discover the
                    hackathon winners and celebrate the outstanding
                    achievements of participants.</div>
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