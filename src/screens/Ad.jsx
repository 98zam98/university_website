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
    <div className='    w-screen h-fit pb-96 md:pb-0 bg-0 flex justify-center items-center '>
      <div className="container">
        <div className='  flex items-center justify-end py-9' >
          <div className=' text-2xl md:text-5xl indent-20 md:indent-50 w-10/12  ' >
            <AppearingText
              isH2={true}
              text={"Simplify your college application journey with UVER. Discover, apply, and succeed in just a few easy steps. Unlock endless possibilities for your future."}
            />
          </div>
        </div>

        <div className=' mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 md:gap-4 ' >
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
                <div className=' flex justify-between flex-col h-full p-4 absolute ml-5 ' >
                  <div className='  scale-200 w-fit h-fit p-6 ' >👩‍🎓</div>
                  <div>
                    <div className=' text-0 text-4xl  md:text-6xl  ' >Get ready to experience the future of college applications with UVER</div>
                    <div className=' my-7' >
                      <ArrowBtn />
                    </div>
                  </div>
                </div>
              </div>
            </FolderShaped>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ad;