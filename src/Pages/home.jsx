import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";
import Timer from "../Components/timer.jsx";
import InnerveText from "../Components/innerveText.jsx";
import Devfolio from "../Components/devfolio.jsx";
import "./pages.css";
import Btn from '../Components/Button/btn';

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
    <div className="w-screen select-none" id="home">
      <div className="w-full select-none">
        <Nav />
      </div>

      <div className="w-full flex flex-col justify-center relative home">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-full flex justify-center">
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6  landing-text select-none">India's Largest Student-Driven Hackathon</p>
          </div>
          <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  landing-text select-none">commencing in</p>
        </div>
        <div className="h-fit mb-2 flex justify-center w-full">
          <Timer />
        </div>
        <div className="w-full flex flex-col justify-center z-10 relative py-8 ">
          <Devfolio />
          
        </div>
        <div className="flex innerve-text w-full justify-center select-none -my-8">
          <InnerveText />
        </div>
      </div>
    </div>
  );
}
