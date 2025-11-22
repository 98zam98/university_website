import React from 'react'
import AppearingText from '../components/AppearingText';
import MainBtn from '../components/MainBtn';

import PhoneMoving from '../components/PhoneMoving';
import RemainingTime from '../components/RemainingTime';

const navArr = [
  "🔍 SEARCH",
  "💬 CHAT",
  "📝 APPLY",
  "👀 TRACK",
];

const Home = () => {
  return (
    <div className=' w-screen   bg-primarywhite1 h-screen' >


      <div className='container mx-auto px-2 md:px-4 h-full flex flex-col mt-1' >

        {/* mobile nav */}
        <div className="md:hidden  flex justify-center items-start w-full py-6 ">
          <div className=' min-w-1/2  '
            style={{
              fontSize: "0.75rem"
            }}
          >
            <nav className=' grid grid-cols-4 gap-4 ' >
              {
                navArr.map((x) => {
                  return (
                    <div
                      key={x}
                      className='col-span-1
                    active:scale-75
                     duration-100
                    '>{x}</div>
                  );
                })
              }
            </nav>
          </div>
        </div>

        <div className=' w-full flex justify-between items-center md:mt-5  ' >
          <div
            className='  w-12 md:w-20 lg:w-32 text-3xl md:text-4xl
             hover:animate-ping 
            '
          >
            UVER
          </div>
          <MainBtn
            text={"Get Early Access 📱"}
          />
        </div>

        <div className="flex-1 flex justify-center items-center ">
          <div className="grid grid-cols-5 md:grid-cols-3 gap-4 ">

            <div className=" col-span-3 md:col-span-1 flex justify-around items-start flex-col scale-85 ">
              <div className="text-3xl md:text-4xl">
                <AppearingText
                  text={"Discover, apply, succeed - UVER app makes college search effortless."}
                />
              </div>
              <RemainingTime />
            </div>


            <div className="  flex justify-center items-center col-span-2 md:col-span-1 "><PhoneMoving posFlag={true} /></div>

            <div className=" col-span-3 md:col-span-1 flex justify-around items-center flex-col ">
              <div></div>
              <nav className=" hidden md:block  ">
                {
                  navArr.map((x) => {
                    return (
                      <div
                        key={x}
                        className='p-3 rounded-full my-7
                          active:scale-75 duration-500 active:shadow-none hover:shadow-primaryblack2 
                           hover:shadow-2xl hover:-translate-y-0.75 hover:text-primarywhite1 hover:bg-primaryblue
                           cursor-pointer   hover:scale-105 hover:rotate-y-20
                      '>{x}</div>
                    );
                  })
                }
              </nav>
            </div>
          </div> </div>

      </div>




    </div>
  )
}

export default Home;