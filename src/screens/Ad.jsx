import React from 'react'
import AppearingText from '../components/AppearingText';
import FolderShaped from '../components/FolderShaped';
import ArrowBtn from '../components/ArrowBtn';

import phoneImg1 from "../assets/img/phone_1_320.jpg";
import desktopImg1 from "../assets/img/phone_1_768.jpg";

import phoneImg2 from "../assets/img/phone_2_320.jpg";
import desktopImg2 from "../assets/img/phone_2_768.jpg";

import phoneImg3 from "../assets/img/phone_3_320.jpg";
import desktopImg3 from "../assets/img/phone_3_768.jpg";

import phoneImg4 from "../assets/img/phone_4_320.jpg";
import desktopImg4 from "../assets/img/phone_4_768.jpg";

import tabletImgz from "../assets/img/graduate_768.jpg";
import desktopImgz from "../assets/img/graduate_1024.jpg";

const Ad = () => {
  return (
    <div className=' overflow-hidden  w-screen h-fit pb-96 md:pb-0 bg-0'>
      <div className=' flex items-center justify-end py-9  ' >
        <AppearingText
          isH2={true}
          text={" ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs  "}
        />
      </div>

      <div className='container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 md:gap-4 ' >
        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2  gap-4 ' >
          {
            [
              { phoneImg: phoneImg2, desktopImg: desktopImg2 },
              { phoneImg: phoneImg1, desktopImg: desktopImg1 },
              { phoneImg: phoneImg3, desktopImg: desktopImg3 },
              { phoneImg: phoneImg4, desktopImg: desktopImg4 },
            ].map((x, i) => {
              return (
                <div
                  key={i}
                  className='  w-full py-9    flex justify-center   items-center   '
                >
                  <img
                    className=' object-cover  w-full  aspect-square flex flex-col rounded-4xl  '
                    src={x.desktopImg}
                    // this depends on the device dpr
                    srcSet={`${x.phoneImg} 320w,, ${x.desktopImg}  1024w`}
                    loading='lazy'
                    width={100}
                    height={100}
                  />

                </div>
              );
            })
          }
        </div>

        <div className=' py-9  flex justify-center h-full  ' >
          <FolderShaped
            borderColor={4}
          >
            <div className=' flex justify-between flex-col h-full w-full relative ' >
              <div
                className='  w-full h-full    flex justify-center   items-center   '
              >
                <img
                  className=' object-cover  w-full h-full flex flex-col rounded-4xl  '
                  src={desktopImgz}
                  // this depends on the device dpr
                  srcSet={` ${tabletImgz} 768w, ${desktopImgz} 1024w`}
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