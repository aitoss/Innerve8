import React, { useEffect } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

const Testimonial = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], [1, 1000]);
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
            <section>
                <div className="spacer h-[100vh]"></div>
                <div
                    ref={container}
                    className="gallery overflow-hidden h-full bg-slate-950 flex flex-row gap-[2vw] p-[2vw] border-box"
                    style={{ y }}
                >
                    <Column className="w-[25%] h-[50%] flex flex-col gap-[2vw] min-w-[250px]" images={[images[0], images[1], images[2]]} y={y} />
                    <Column className="w-[25%] h-[50%] flex flex-col gap-[2vw] min-w-[250px]" images={[images[1], images[0], images[2]]} />
                    <Column className="w-[25%] h-[50%] flex flex-col gap-[2vw] min-w-[250px]" images={[images[2], images[0], images[2]]} />
                    <Column className="w-[25%] h-[50%] flex flex-col gap-[2vw] min-w-[250px]" images={[images[1], images[2], images[2]]} />
                </div>
                <div className="spacer h-[100vh]"></div>
            </section>
        </>
    );
};

const Column = ({ images, y=0 }) => {
    return (
        <motion.div style={{y}} className="w-[25%] h-[50%] flex flex-col gap-[2vw] min-w-[250px]">
            {images.map(
                (src, index) => {
                    return (
                        <div key={index} className="w-[100%] py-2 rounded-lg overflow-hidden relative  ">
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
