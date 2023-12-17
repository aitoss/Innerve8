import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Btn from '../Components/Button/btn';
const Bannercard = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:aitoss@aitpune.edu.in';
    };

    return (
        <>
            <section className=" md:px-10 mx-8 mb-8">
                <div className="banner flex flex-col gap-8 p-12 max-w-screen-xl" style={{ margin: 'auto' }}>
                    <div className="banner-sub w-full flex flex-row justify-between items-center">
                        <p className="banner-heading font-medium">Got questions? <br />Contact us</p>
                        <a href="mailto:innerve@aitpune.edu.in" className="w-[250px]">
                            <Btn name="innerve@aitpune.edu.in" icon="↗" />
                        </a>
                    </div>
                    <div className="banner-sub w-full flex justify-between items-center">
                        <p className="banner-heading font-medium">Want to <br />sponsor us?</p>
                        <div className="banner-sponser flex flex-col justify-center items-end gap-4">
                            <a href="https://forms.gle/UePkH2FAiL29dkkC9" className="w-[155px]">
                                <Btn name="Fill the form" icon="↗" />
                            </a>
                            <a href="https://drive.google.com/file/d/1tbocdRB4l1iOlunx1hSzEqrI45mg5zU9/view?usp=sharing" className="w-[135px]">
                                <Btn name="Brochure" icon="↗" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default Bannercard