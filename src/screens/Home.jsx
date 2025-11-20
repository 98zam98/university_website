import React from 'react'
import AppearingText from '../components/AppearingText';
import MainBtn from '../components/MainBtn';

import phoneImg from "../assets/img/place_holder_50_x_50.png";
import tabletImg from "../assets/img/place_holder_150_x_150.png";
import desktopImg from "../assets/img/place_holder_320_x_320.png";

const Home = () => {
  return (
    <div className='overflow-hidden h-screen w-screen   bg-1' >


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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          <div className="bg-red-300 ">
            <div className=' '>
              <AppearingText
                text={"   ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs  ldfnhgdfhgkhdfhs "}
              />
              <div>clock</div>
            </div>
          </div>

          <div className="  "></div>

          <nav className="bg-blue-300 h-20 hidden md:block">big screen nav</nav>
        </div>

      </div>




    </div>
  )
}

export default Home;