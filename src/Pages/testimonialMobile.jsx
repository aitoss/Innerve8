import React, { useEffect } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'


const TestimonialMob = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['end start', 'start end']
    });
    const y = useTransform(scrollYProgress, [0, 1], [1, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [1, 150]);
    const images = [
        "1.JPG",
        "2.JPG",
        "3.JPG",
        "4.JPG",
        "5.JPG",
        "6.JPG",
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
            <section className="bg-[#121212] lg:hidden h-full w-screen">
                <div className="flex justify-center relative top-[300px] z-30 text-4xl lg:text-7xl font-medium items-center">Connect with Code
                </div>
                <div
                    ref={container}
                    className="gallery overflow-hidden h-full bg-[#121212]  flex flex-row gap-[2vw] p-[2vw] border-box"
                    style={{ y }}
                >
                    <Column className=" w-1/3 h-[40%] relative flex -top-[10%] flex-col gap-[2vw] " images={[images[0], images[1], images[2]]} y={y} />
                    <Column className=" h-[40%] w-1/3 flex -top-[75%] flex-col gap-[2vw] " images={[images[3], images[4], images[5]]} y={y2} />
                   
                </div>
            </section>


    
        </>
    );
};

const Column = ({ images, y = 0 }) => {
    return (
        <motion.div style={{ y }} className="w-screen h-[50%] relative flex flex-col gap-[2vw]">
            {images.map(
                (src, index) => {
                    return (
                        <div key={index} className="w-[100%] py-2 rounded-lg overflow-hidden relative  ">
                            <img className="object-cover"
                                src={`/images/testi/${src}`} fill
                                alt='image'
                            />
                        </div>
                    );
                }
            )}
        </motion.div>
    );
};

export default TestimonialMob;
