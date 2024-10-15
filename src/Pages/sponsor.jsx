import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import udchalo from "../assets/images/udchalo.png"
import accops from "../assets/images/Accops.png"
import byte from "../assets/images/byte.png"
import mro from "../assets/images/MRRO.png"
import Slider from "../Components/slider";
import Kaagaz from "../assets/images/kgaz.png"
import Solana from "../assets/images/SOL.png"
import ICICI from "../assets/images/icici.png"
import Quine from "../assets/images/qne.png"
import Replit from "../assets/images/rplt.png"
import Verbwire from "../assets/images/vbwire.png"
import HeadingMob from '../Components/HeadingMob';
import HeadingMain from '../Components/HeadingMain';
import GDSC from "../assets/images/GDsc.png"
import devfolio from "../assets/images/devf.png"
import xyz from "../assets/images/xyzz.png"
import echo from "../assets/images/ec3d.png"
import iciciFinal from "../assets/images/icic.png"
import tailcall from "../assets/images/taillc.png"
import microgrp from "../assets/images/msoft.png"
import Budhani from "../assets/images/budhani.png"
const Sponsor = () => {
  const titleSponsors = [
    { id: 1, logo: accops, name: 'Accops', link: 'https://accops.com/' },
    { id: 2, logo: mro, name: 'Mro', link: 'https://mrocorp.com/' },

  ];
  const platinumSponsors = [
    { id: 1, logo: tailcall, name: 'tailcall', link: 'https://tailcall.run/'},
    // { id: 2, logo: microsoft, name: 'microsoft', link: 'https://www.microsoft.com/en-in'},
    // { id: 3, logo: groupme, name: 'groupme', link: 'https://groupme.com/en-US/'},
    { id: 3, logo: microgrp, name: 'microgrp', link: 'https://groupme.com/en-US/'},

  ];

  const platformSponsors = [
    { id: 1, logo: Solana, name: 'solana', link: 'https://solana.com/' },
    { id: 3, logo: devfolio, name: 'devfolio', link: 'https://devfolio.co/'}
  ];


  const coSponsors = [
    { id: 1, logo: Kaagaz, name: 'kaagaz', link: 'https://kaagaz.app/' },
    { id: 2, logo: Replit, name: 'Replit', link:'https://replit.com' },
    { id: 3, logo: Quine, name: 'Quine',link:'https://quine.sh/' },

  ];

  const subSponsors = [
    { id: 1, logo: Verbwire, name: 'Verbwire', link:'https://www.verbwire.com/' },
    { id: 2, logo: xyz, name: 'xyz', link:'https://www.gen.xyz/' },
    { id: 3, logo: echo, name: 'echo3D',link:'https://www.echo3d.com/' },


  ];

  const goodwillSponsors = [
    { id: 1, logo: iciciFinal, name: 'iciciFinal', link: 'https://www.icicibank.com/' },
  ];

  const community = [
    { id: 1, logo: GDSC, name: 'GDSC', link:'https://linktr.ee/dsc_ait' },

  ];

  const foodParters = [
    { id: 1, logo: Budhani, name: 'budhani', link:'https://gurukrupabudhanibrothers.com/' },

  ];

  return (
    <>
      <div className="h-full py-6" id='sponsors'>
        <div className="flex justify-center w-screen top-16 relative">
          <Slider text={['Our Sponsors']} />
        </div>
        <div className="mt-16 -mb-4">
          <HeadingMob name="Our Past Sponsors" />
        </div>
        <div className=" lg:py-4 lg:p w-screen flex flex-col xl:mt-[3%] justify-center flex-wrap  items-center">
          <SponsorCategory title="TITLE SPONSOR" sponsors={titleSponsors} />
          <SponsorCategory title="PLATINUM SPONSOR" sponsors={platinumSponsors} />
          <SponsorCategory title="PLATFORM SPONSOR" sponsors={platformSponsors} />
          <SponsorCategory title="CO SPONSOR" sponsors={coSponsors} />
          <SponsorCategory title="SUB SPONSOR" sponsors={subSponsors} />
          <SponsorCategory title="GOODWILL PARTNER" sponsors={goodwillSponsors} />
          <SponsorCategory title="COMMUNITY PARTNER" sponsors={community} />
          <SponsorCategory title="FOOD PARTNER" sponsors={foodParters} />
        </div>
        <div className="flex relative mt-4 justify-center">
          <HeadingMain name="Sponsors"/>
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
    <div className="flex justify-center items-center flex-row flex-wrap md:gap-20 lg:gap-24 sm:gap-[80px] gap-8 mt-8 ">
      {sponsors.map((sponsor) => (
        <a href={sponsor.link}>
                  <motion.div
          key={sponsor.id}
          initial={{ scale: 1.3 }}
          whileHover={{ scale: 1.4, rotate: [0, 2, 0], duration: 0.1 }}
        >
          <img
            src={sponsor.logo}
            alt={`Sponsor Logo ${sponsor.id}`}
            className="max-h-16 max-w-16"
          />
        </motion.div>
        </a>

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



export default Sponsor;