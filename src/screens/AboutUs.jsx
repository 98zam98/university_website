import React from 'react'
import NameInTopLeft from '../components/NameInTopLeft';
import AppearingText from '../components/AppearingText';
import MainBtn from '../components/MainBtn';


import meetingVideo from "../assets/vid/meet.mp4";



const AboutUs = () => {
  return (
    <div className=' overflow-hidden h-screen  w-screen bg-primarywhite2 relative'>

      {/* Background video */}
      <video
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={meetingVideo} type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div className=" absolute z-10 top-0 left-0  flex items-center justify-center h-full w-full bg-black/70">


        <div className='container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-4  text-primarywhite1 ' >
          <div>
            <NameInTopLeft
              text={"About Us"}
              textColor={0}
            />
          </div>
          <div className='col-span-2 indent-20  md:indent-50 ' >
            <div className=' text-2xl md:text-4xl   ' >
              <AppearingText
                isH2={true}
                text={"At UVER, we’re on a mission to simplify the college search and application process. We value personalized support, equal access to education, and making the journey effortless for students world"}
              />
            </div>
            <p className='my-10 md:my-20 ' >
              Our mission is to revolutionize college search and applications, providing personalized support and equal opportunities. We aim to simplify the process and empower students to make informed decisions for their educational journey.
            </p>
            <MainBtn
              text={"Go To Careers 👉"}
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutUs;