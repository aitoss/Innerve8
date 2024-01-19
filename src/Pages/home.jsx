import React from "react";
import Nav from "../Components/Nav/nav.jsx";
import Dots from "/src/assets/images/dots.svg";
import Timer from "../Components/timer.jsx";
import InnerveText from "../Components/innerveText.jsx";
import Devfolio from "../Components/devfolio.jsx";
import "./pages.css";
import Btn from "../Components/Button/btn";
import GroupMe from "../assets/images/groupme.svg";

export default function Home() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen select-none" id="home">
      <div className="w-full select-none">
        <Nav />
      </div>

      <div className="w-full flex flex-col justify-center relative home">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-full flex justify-center">
            <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6  landing-text select-none">
              India's Largest Student-Driven Hackathon
            </p>
          </div>
          <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  landing-text select-none">
            commencing in
          </p>
        </div>
        <div className="h-fit mb-2 flex justify-center w-full">
          <Timer />
        </div>
        <div className="w-full flex flex-col z-10 py-8 items-center gap-6">
          <Devfolio />
          <div className="flex flex-col sm:flex-row">
            <a href="https://github.com/tailcallhq/tailcall" target="_blank">
            <button
              type="button"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Checkout TailCall
            </button>
            </a>
            <a href="https://groupme.com/join_group/98531164/bUIb5Zqv" target="_blank">
            <button
              type="button"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <img src={GroupMe} className="w-4 h-4 me-2"/>
              24/7 Support
            </button>
            </a>
          </div>
        </div>
        <div className="flex innerve-text w-full justify-center select-none -my-8">
          <InnerveText />
        </div>
      </div>
    </div>
  );
}
