import React from 'react'
import AppearingText from '../components/AppearingText';
import MainBtn from '../components/MainBtn';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";
import PhoneMoving from '../components/PhoneMoving';

const Home = () => {
  return (
    <div className=' min-h-screen w-screen   bg-0 relative' >


      <div className='container mx-auto px-2 md:px-4' >
        <nav className='block md:hidden' >mobile nav</nav>

        <div className=' w-full flex justify-between items-center my-3.5  ' >
          <div
            className='  w-12 md:w-20 lg:w-32 '
          >
            UVER
          </div>
          <MainBtn
            text={"Get Early Access 📱"}
          />
        </div>

        <div className="grid grid-cols-5 md:grid-cols-3 gap-4">

          <div className="bg-red-300 col-span-3 md:col-span-1 ">
            <div className=' '>
              <AppearingText
                text={"   ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs "}
              />
              <div>clock</div>
            </div>
          </div>

              
          <div className="  flex justify-center items-center col-span-2 md:col-span-1 "><PhoneMoving posFlag={true} /></div>

          <nav className="bg-blue-300 h-20 hidden md:block">big screen nav</nav>
        </div>

      </div>




    </div>
  )
}

export default Home;