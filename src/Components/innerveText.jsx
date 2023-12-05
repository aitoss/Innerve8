import React from "react";
import InnText from "../assets/images/innText.svg"; 



export default function InnerveText() {
    return (
        <div className="absolute overflow-hidden top-[25rem]">
            {/* <h1 className="text-[7rem] md:text-[12rem] lg:text-[16rem] xl:text-[27rem] text-black">Innerve</h1> */}
            <img src={InnText} alt="Innerve" className="scale-100"/>
        </div>
    );
}