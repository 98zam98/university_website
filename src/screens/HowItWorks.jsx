import React from 'react'
import NameInTopLeft from '../components/NameInTopLeft';
import FolderShaped from '../components/FolderShaped';
import TwoLineHeader from '../components/TwoLineHeader';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

const HowItWorks = () => {
  return (
    <div className=' py-9  w-screen  bg-1'>
      <div className='  container mx-auto px-2 md:px-4 grid grid-cols-3 gap-4  pb-9 ' >

        <div className=' flex items-start justify-start  ' >
          <NameInTopLeft
            text={"kdhgdfsgk"}
          />
        </div>

        <div className=' flex items-center justify-center  ' >
          <TwoLineHeader
            line1={"asdasd"}
            line2={"asdasd"}
          />
        </div>

        <div
          className='  w-full flex justify-end   items-start  '
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

      <div className=' container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' >
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
            return (<div
              key={i}
              className=' flex items-center justify-center  '
            >
              <FolderShaped />
            </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default HowItWorks;