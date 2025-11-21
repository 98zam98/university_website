import React from 'react'
import AppearingText from '../components/AppearingText';
import MainBtn from '../components/MainBtn';

import PhoneMoving from '../components/PhoneMoving';

const Home = () => {
  return (
    <div className=' w-screen   bg-0 h-screen' >


      <div className='container mx-auto px-2 md:px-4 h-full flex flex-col mt-1' >
        <div className="md:hidden  flex justify-center items-start w-full py-6 ">
          <div className=' min-w-1/2  '
          style={{
            fontSize:"0.75rem"
          }}
          >
            <nav className=' grid grid-cols-4 gap-4 ' >
              <div className='col-span-1'>🔍 SEARCH</div>
              <div className='col-span-1'>💬 CHAT</div>
              <div className='col-span-1'>📝 APPLY</div>
              <div className='col-span-1'>👀 TRACK</div>
            </nav>
          </div>
        </div>

        <div className=' w-full flex justify-between items-center md:mt-5  ' >
          <div
            className='  w-12 md:w-20 lg:w-32 text-3xl md:text-4xl '
          >
            UVER
          </div>
          <MainBtn
            text={"Get Early Access 📱"}
          />
        </div>

        <div className="flex-1 flex justify-center items-center ">
          <div className="grid grid-cols-5 md:grid-cols-3 gap-4 ">

            <div className=" col-span-3 md:col-span-1 flex justify-around items-start flex-col ">
              <div className="text-3xl md:text-4xl">
                <AppearingText
                  text={"Discover, apply, succeed - UVER app makes college search effortless."}
                />
              </div>
              <div className=' mt-4 text-2 ' >
                <div>⏳ Launching starts in</div>
                <div className="grid grid-cols-8 gap-4 text-4xl lg:text-7xl text-3   ">
                  <div className='col-span-2'>23</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-2'>22</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-2'>43</div>
                </div>
                <div className="grid grid-cols-3 gap-4 ">
                  <div>days</div>
                  <div>hours</div>
                  <div>minutes</div>
                </div>
              </div>
            </div>


            <div className="  flex justify-center items-center col-span-2 md:col-span-1 "><PhoneMoving posFlag={true} /></div>

            <div className=" col-span-3 md:col-span-1 flex justify-around items-center flex-col ">
              <div></div>
              <nav className=" hidden md:block  ">
                <div className='py-3' >🔍 SEARCH</div>
                <div className='py-3' >💬 CHAT</div>
                <div className='py-3' >📝 APPLY</div>
                <div className='py-3' >👀 TRACK</div>
              </nav>
            </div>
          </div> </div>

      </div>




    </div>
  )
}

export default Home;