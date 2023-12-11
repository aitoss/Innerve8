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
    <div className="w-screen h-screen">
      <div className="w-full">
        <Nav />
      </div>

      <div className="w-full flex flex-col h-3/6 justify-center">
        <div className="flex flex-col w-full items-center justify-center">
            <div className="w-full flex justify-center">
            <p className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-6 text-black landing-text">India's biggest student driven hackathon</p>
            </div>
            <p className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black landing-text">happening in</p>
        </div>
        <div className="h-fit flex justify-center w-full">
          <Timer />
        </div>
        <div className="w-full flex justify-center z-10 relative mt-10">
          <Devfolio />
        </div>
        <div className="flex innerve-text">
          <InnerveText />
        </div>
        <div className="absolute w-full flex justify-center overflow-hidden">
          <img src={Dots} alt="dots" style = {{zIndex: '-1'}} className="scale-110" />
        </div>
      </div>
    </div>
  );
}
