import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeadingMainBlack = ({ name }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1,
            ease: 'easeOut',
          },
        });
      }
    }, [inView, controls]);
  
    return (
      <div className="text-center xl:block hidden tracking-[10px] bg-clip-text  font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{ y: -50, scale: 1.2, duration: 5 }}
          transition={{ type: "just", stiffness: 110 }}
          animate={controls}
          className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#0f0f0f] to-[#515151] whitespace-nowrap"
        >
          {name}
        </motion.div>
      </div>
    );
  };

  export default HeadingMainBlack;