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
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
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
<section className="bg-[#121212] space-y-4 w-screen hidden h-full lg:block relative overflow-hidden">
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
        <Column className="w-[20%] h-[40%]  flex flex-col gap-[2vw] " images={[images[6], images[7], images[13]]} y={y3} />
        <Column className="w-[20%] h-[40%] flex  flex-col gap-[2vw] " images={[images[11], images[12], images[10]]} y={y4} />
    </div>

    <div className="relative bottom-0 left-0 right-0 overflow-hidden w-screen ">
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
                                src={`/images/testim1/${src}`} fill
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
      <div className="text-center xl:block hidden tracking-[10px] bottom-0 font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)] memories" >
       <motion.div
    whileInView={{ y: 0, scale: 1.2, duration: 5 }}
    transition={{ type: 'just', stiffness: 110 }}
    className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#0f0f0f] to-[#515151] whitespace-nowrap w-full overflow-hidden"
  >
    Memories
  </motion.div>
      </div>
    );
  };

export default Testimonial;
