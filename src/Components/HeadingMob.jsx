import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeadingMob = ({ name }) => {
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
    <div className="pt-4 text-center xl:hidden tracking-[8px] font-medium text-[64px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls}
        className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap"
        whileInView={{ y: -10, scale: 1, duration: 1 }}
        transition={{ type: 'just', stiffness: 150 }}
      >
        {name}
      </motion.div>
    </div>
  );
};

export default HeadingMob;