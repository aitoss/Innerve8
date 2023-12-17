import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import udchalo from "../assets/images/udchalo.png"
import accops from "../assets/images/accops.png"
import byte from "../assets/images/byte.png"
import mro from "../assets/images/mro.png"
import Slider from "../Components/slider";
import Kaagaz from "../assets/images/kaagaz.jpg"
import Solana from "../assets/images/solana.png"
import ICICI from "../assets/images/icici.png"
import Quinn from "../../public/images/quinn.png"
import Replit from "../../public/images/replit.png"
import Verbwire from "../../public/images/verbwire.png"
import HeadingMob from '../Components/HeadingMob';

const Sponsor = () => {
  const titleSponsors = [
    { id: 1, logo: accops, name: 'Accops' },
    { id: 2, logo: mro, name: 'Mro' },

  ];

  const platinumSponsors = [
    { id: 1, logo: Kaagaz, name: 'kaagaz' },
    { id: 2, logo: ICICI, name: 'icici' },
    { id: 3, logo: Solana, name: 'solana' },

  ];

  const subSponsors = [
    { id: 1, logo: Replit, name: 'Replit' },
    { id: 2, logo: Verbwire, name: 'Verbwire' },
    { id: 3, logo: Quinn, name: 'Quinn' },

  ];

  return (
    <>
      <div className="h-full" id='sponsors'>
        <div className="flex justify-center w-screen top-16 relative">
          <Slider text={['Our Sponsors']} />
        </div>
        <div className="mt-16 -mb-4">
          <HeadingMob name="Sponsors" />
        </div>
        <div className="lg:p-4 w-screen flex flex-col xl:mt-[3%] justify-center flex-wrap items-center">
          <SponsorCategory title="TITLE SPONSOR" sponsors={titleSponsors} />
          <SponsorCategory title="PLATINUM SPONSOR" sponsors={platinumSponsors} />
          <SponsorCategory title="SUB SPONSOR" sponsors={subSponsors} />
        </div>
        <div className="flex relative mt-16 justify-center">
          <HeadingMain />
        </div>
      </div>

    </>
  );
};

const Heading = ({ title }) => {
  return (
    <div className="text-center flex  mt-14 font-medium text-4xl text-[24px] text-[#121212] whitespace-nowrap justify-center">
      <motion.div className="tracking-tight text-[#121212] bg-clip-text whitespace-nowrap">
        {title}
      </motion.div>
    </div>
  );
};

const SponsorLogos = ({ sponsors }) => {
  return (
    <div className="flex justify-center items-center flex-row flex-wrap gap-7 mt-8">
      {sponsors.map((sponsor) => (
        <motion.div
          key={sponsor.id}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, rotate: [0, 2, 0], duration: 0.1 }}
        >
          <img
            src={sponsor.logo}
            alt={`Sponsor Logo ${sponsor.id}`}
            className="max-h-16 max-w-16"
          />
        </motion.div>
      ))}
    </div>
  );
};

const SponsorCategory = ({ title, sponsors }) => {
  return (
    <>
      <Heading title={title} />
      <div className="flex flex-wrap px-[10%] justify-center">
        <SponsorLogos sponsors={sponsors} />
      </div>
    </>
  );
};
const HeadingMain = () => {
  return (
    <div className="text-center xl:block hidden tracking-[10px] bg-clip-text  font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div
        whileInView={{ y: -80, scale: 1.2, duration: 5 }}
        transition={{ type: 'just', stiffness: 110 }}
        className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#d9d9d9] to-[#f6f6f6] whitespace-nowrap"
      >
        Sponsors
      </motion.div>
    </div>
  );
};



export default Sponsor;