import React from 'react'
import AppearingText from '../components/AppearingText';
import FolderShaped from '../components/FolderShaped';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

const Ad = () => {
  return (
    <div className='h-screen bg-0'>
      <AppearingText
        isH2={true}
        text={" ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs  "}
      />
      <div>
        <div>
          {
            [
              {},
              {},
              {},
              {},
            ].map((x, i) => {
              return (
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
              );
            })
          }
        </div>
        <FolderShaped />
      </div>
    </div>
  )
}

export default Ad;