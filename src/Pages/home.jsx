import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";
import Timer from "../Components/timer.jsx";
import InnerveText from "../Components/innerveText.jsx";
import Devfolio from "../Components/devfolio.jsx";
import "./pages.css";

export default function Home() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div className="w-screen select-none">
      <div className="w-full select-none">
        <Nav />
      </div>

      <div className="w-full flex flex-col justify-center relative home">
        <div className="flex flex-col w-full items-center justify-center">
            <div className="w-full flex justify-center">
<<<<<<< HEAD
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6  landing-text select-none">India's biggest student driven hackathon</p>
            </div>
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  landing-text select-none">happening in</p>
=======
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6  landing-text">India's biggest student driven hackathon</p>
            </div>
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  landing-text">happening in</p>
>>>>>>> 2eb5852c99bff1762cc0e2f12620a19d3562aa0e
        </div>
        <div className="h-fit mb-6 flex justify-center w-full">
          <Timer />
        </div>
        <div className="w-full flex justify-center z-10 relative p-5 pb-0">
          <Devfolio />
        </div>
        <div className="flex innerve-text w-full justify-center select-none">
          <InnerveText />
        </div>
<<<<<<< HEAD
=======
        <div className="absolute w-full flex justify-center overflow-hidden top-8">
          <img src={Dots} alt="dots" style = {{zIndex: '-1'}} className="scale-110" />
        </div>
>>>>>>> 2eb5852c99bff1762cc0e2f12620a19d3562aa0e
      </div>
    </div>
  );
}
