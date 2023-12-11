import React, { useEffect } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'


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
            <section className="bg-[#121212] w-screen hidden h-full lg:block">
                <div className="flex justify-center relative top-[450px] z-30 py-8 text-3xl lg:text-7xl items-center">Connect with Code - Cultivate Growth
                </div>
                <div
                    ref={container}
                    className="gallery overflow-hidden h-full bg-[#121212]  flex flex-row gap-[2vw] p-[2vw] border-box"
                    style={{ y }}
                >
                    <Column className="w-[20%] h-[40%] relative flex -top-[10%] flex-col gap-[2vw] " images={[images[0], images[1], images[2]]} y={y} />
                    <Column className="w-[20%] h-[40%]  flex -top-[75%] flex-col gap-[2vw] " images={[images[1], images[0], images[2]]} y={y2} />
                    <Column className="w-[20%] h-[40%]  flex flex-col gap-[2vw] " images={[images[2], images[0], images[2]]} y={y3} />
                    <Column className="w-[20%] h-[40%] flex  flex-col gap-[2vw] " images={[images[1], images[2], images[2]]} y={y4} />
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
                                src={`/images/${src}`} fill
                                alt='image'
                            />
                        </div>
                    );
                }
            )}
        </motion.div>
    );
};

export default Testimonial;
