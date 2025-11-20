import React from 'react'
import AppearingText from '../components/AppearingText';
import FolderShaped from '../components/FolderShaped';
import ArrowBtn from '../components/ArrowBtn';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

import phoneImg2 from "../assets/img/place_holder_320_x_640.png";
import tabletImg2 from "../assets/img/place_holder_768_x_1536.png";
import desktopImg2 from "../assets/img/place_holder_1024_x_2048.png";

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
        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2  gap-4 ' >
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
                  className='  w-full py-9    flex justify-center   items-center   '
                >
                  <img
                    className=' object-cover  w-full  aspect-square flex flex-col rounded-4xl  '
                    src={desktopImg}
                    // this depends on the device dpr
                    srcSet={`${phoneImg} 50w, ${tabletImg} 15w, ${desktopImg} 320w`}
                    loading='lazy'
                    width={100}
                    height={100}
                  />

                </div>
              );
            })
          }
        </div>

        <div className=' py-9  flex justify-center  ' >
          <FolderShaped
          borderColor={4}
          >
            <div className=' flex justify-between flex-col h-full w-full relative ' >
              <div
                className='  w-full h-full    flex justify-center   items-center   '
              >
                <img
                  className=' object-cover  w-full h-full flex flex-col rounded-4xl  '
                  src={desktopImg2}
                  // this depends on the device dpr
                  srcSet={`${phoneImg2} 320w, ${tabletImg2} 768w, ${desktopImg2} 1024w`}
                  loading='lazy'
                  width={100}
                  height={100}
                />

              </div>
              <div className=' flex justify-between flex-col h-full p-4 absolute ' >
                <div className='  scale-200 w-fit h-fit p-6 ' >👩‍🎓</div>
                <div>
                  <div>Get ready to experience the future of college applications with UVER</div>
                  <ArrowBtn />
                </div>
              </div>
            </div>
          </FolderShaped>
        </div>
      </div>
    </div>
  )
}

export default Ad;