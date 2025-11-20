import React from 'react'
import NameInTopLeft from '../components/NameInTopLeft';
import FolderShaped from '../components/FolderShaped';
import TwoLineHeader from '../components/TwoLineHeader';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

const HowItWorks = () => {
  return (
    <div className='h-screen bg-1'>
      <div className=' w-full ' >
        <NameInTopLeft
          text={"kdhgdfsgk"}
        />

        <TwoLineHeader
          line1={"asdasd"}
          line2={"asdasd"}
        />

        <div
          className='  w-12 md:w-20 lg:w-32 '
        >
          <img
            className=' object-cover '
            src={desktopImg}
            // this depends on the device dpr
            srcSet={`${phoneImg} 50w, ${tabletImg} 15w, ${desktopImg} 320w`}
            alt="graduate"
            width={100}
            height={100}
          />

        </div>
      </div>

      <div className=' w-full ' >
        {
          [
            {},
            {},
            {},
            {},
            {},
            {},
          ].map((x, i) => {
            // change key
            return (<FolderShaped
              key={i}
            />);
          })
        }
      </div>
    </div>
  )
}

export default HowItWorks;