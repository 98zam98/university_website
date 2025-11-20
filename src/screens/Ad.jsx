import React from 'react'
import AppearingText from '../components/AppearingText';
import FolderShaped from '../components/FolderShaped';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

const Ad = () => {
  return (
    <div className=' overflow-hidden  w-screen  bg-0'>
      <div className=' flex items-center justify-end py-9  ' >
        <AppearingText
          isH2={true}
          text={" ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs  "}
        />
      </div>

      <div className='container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-4 ' >
        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2' >
          {
            [
              {},
              {},
              {},
              {},
            ].map((x, i) => {
              return (
                <div
                  key={i}
                  className='  w-full py-9    flex justify-center  '
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
              );
            })
          }
        </div>

        <div className=' py-9  flex justify-center  ' >
          <FolderShaped />
        </div>
      </div>
    </div>
  )
}

export default Ad;