import React from 'react'
import NameInTopLeft from '../components/NameInTopLeft';
import FolderShaped from '../components/FolderShaped';
import TwoLineHeader from '../components/TwoLineHeader';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";
import MainBtn from '../components/MainBtn';

const HowItWorks = () => {
  return (
    <div className=' py-9  w-screen  bg-1'>
      <div className='  container mx-auto px-2 md:px-4 grid grid-cols-2 md:grid-cols-3 gap-4  pb-9 ' >

        <div className=' flex items-start justify-start  ' >
          <NameInTopLeft
            text={"How It Works"}
          />
        </div>

        <div className=' md:flex items-center justify-center hidden  ' >
          <TwoLineHeader
            line1={"asdasd"}
            line2={"asdasd"}
          />
        </div>

        <div
          className='  w-full flex justify-end   items-start  '
        >
          <div className=' scale-200 w-fit h-fit ' >
            🎓
          </div>
        </div>

      </div>

      <div className=' md:hidden items-center justify-center flex  ' >
        <TwoLineHeader
          line1={"asdasd"}
          line2={"asdasd"}
        />
      </div>

      <div className=' container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' >
        {
          //  icon , header , paragraph 
          [
            {
              icon: "🔍",
            },
            {
              icon: "💬",
            },
            {
              icon: "👀",
            },
            {
              icon: "📝",
            },
            {
              icon: "🏫",
            },
          ].map((x, i) => {
            // change key
            return (<div
              key={i}
              className=' flex items-center justify-center  '
            >
              <FolderShaped
                borderColor={4}
              >
                <div className=' p-8 ' >
                  <div className=' scale-200 w-fit h-fit ' >
                    {x.icon}
                  </div>
                  <h1>
                    header
                  </h1>
                  <p>
                    dfsgdsfhg
                  </p>

                </div>
              </FolderShaped>
            </div>
            );
          })
        }
        <div
          className=' flex items-center justify-center relative  '
        >
          <div
            className='   flex justify-end   items-start  overflow-hidden  rounded-4xl  '
          >
            <img
              className=' object-cover w-full '
              src={desktopImg}
              // this depends on the device dpr
              srcSet={`${phoneImg} 50w, ${tabletImg} 15w, ${desktopImg} 320w`}
              loading='lazy'
              width={500}
              height={500}
            />
          </div>
          <div className=' w-full absolute ' >
            <p className=' text-0 ' >Discover, apply, succeed - UVER app makes college search effortless.</p>
            <MainBtn
              text={"Get Early Access 📱"}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowItWorks;