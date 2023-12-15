import React, { useEffect } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import DarkSlider from '../Components/darkSlider';


const Testimonial = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['end start', 'start end']
    });
    const y = useTransform(scrollYProgress, [0, 1], [1, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [1, 250]);
    const y3 = useTransform(scrollYProgress, [0, 1], [1, -100]);
    const y4 = useTransform(scrollYProgress, [0, 1], [1, 450]);
    const images = [
        "1.JPG",
        "2.JPG",
        "3.JPG",
        "4.JPG",
        "5.JPG",
        "6.JPG",
        "7.jpg",
        "8.JPG",
        "9.JPG",
        "10.JPG",
        "11.JPG",
        "12.JPG",
        "13.JPG",
        "14.JPG",
        "15.JPG",
        "16.JPG",
    ];

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
<section className="bg-[#121212] space-y-4 w-screen hidden h-full lg:block relative">
    <div className="py-8">
        <DarkSlider text={["Connect with code"]} />
    </div>

    <div
        ref={container}
        className="gallery overflow-hidden -top-18 h-full bg-[#121212]  flex flex-row gap-[2vw] p-[2vw] border-box relative"
        style={{ y }}
    >
        <Column className="w-[20%] h-[40%] relative flex -top-[10%] flex-col gap-[2vw] " images={[images[0], images[1], images[2]]} y={y} />
        <Column className="w-[20%] h-[40%]  flex -top-[75%] flex-col gap-[2vw] " images={[images[3], images[4], images[5]]} y={y2} />
        <Column className="w-[20%] h-[40%]  flex flex-col gap-[2vw] " images={[images[6], images[7], images[8]]} y={y3} />
        <Column className="w-[20%] h-[40%] flex  flex-col gap-[2vw] " images={[images[9], images[10], images[11]]} y={y4} />
    </div>

    <div className="relative bottom-0 left-0 right-0">
        <Heading />
    </div>
</section>


    
        </>
    );
};

const Column = ({ images, y = 0 }) => {
    return (
        <motion.div style={{ y }} className="w-[25%] h-[50%] relative flex flex-col gap-[2vw] ">
            {images.map(
                (src, index) => {
                    return (
                        <div key={index} className="w-[100%] py-2 rounded-lg overflow-hidden relative">
                            <img className="object-cover"
                                src={`/images/testim/${src}`} fill
                                alt='image'
                            />
                        </div>
                    );
                }
            )}
        </motion.div>
    );
};

const Heading = () => {
    return (
      <div className="text-center lg:block hidden tracking-[8px] bottom-0 font-medium text-[180px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
       <motion.div
    whileInView={{ y: 0, scale: 1.5, duration: 5 }}
    transition={{ type: 'just', stiffness: 110 }}
    className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap"
  >
    Memories
  </motion.div>
      </div>
    );
  };

export default Testimonial;
