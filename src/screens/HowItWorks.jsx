import React from 'react'
import NameInTopLeft from '../components/NameInTopLeft';
import FolderShaped from '../components/FolderShaped';
import TwoLineHeader from '../components/TwoLineHeader';
import MainBtn from '../components/MainBtn';

import phoneImg from "../assets/img/college_320.jpg";
import desktopImg from "../assets/img/college_768.jpg";

const line1 = "Simple Steps To";

const line2 = "College Success";
const HowItWorks = () => {
  return (
    <div className=' py-9  w-screen  bg-1'>
      <div className='  container mx-auto px-2 md:px-4 grid grid-cols-2 md:grid-cols-6 gap-4  pb-9 ' >

        <div className=' flex items-start justify-start  ' >
          <NameInTopLeft
            text={"How It Works"}
          />
        </div>

        <div className=' md:flex items-center justify-center hidden col-span-4  ' >
          <TwoLineHeader
            line1={line1}
            line2={line2}
          />
        </div>

        <div
          className='  w-full flex justify-end   items-start  '
        >
          <div className=' scale-200 w-fit h-fit pr-3 md:pr-0 ' >
            🎓
          </div>
        </div>

      </div>

      <div className=' md:hidden items-center justify-center flex  ' >
        <TwoLineHeader
          line1={line1}
          line2={line2}
        />
      </div>

      <div className=' container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-0 ' >
        {
          //  icon , header , paragraph 
          [
            {
              icon: "🔍",
              header: "Search for Your Ideal College",
              text: "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
            },
            {
              icon: "💬",
              header: "Chat with Admissions Experts",
              text: "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
            },
            {
              icon: "👀",
              header: "Track Deadlines and Requirements",
              text: "Receive notifications for upcoming deadlines, document requirements, and submission dates. Keep track of the progress of your applications.",
            },
            {
              icon: "📝",
              header: "Apply with Confidence",
              text: "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
            },
            {
              icon: "🏫",
              header: "Plan Your College Future",
              text: "Once you receive acceptance letters, utilize UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions.",
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
                  <h1 className=' mb-5 mt-12 text-3xl md:text-5xl ' >
                    {x.header}
                  </h1>
                  <p className=' md:text-2xl ' >
                    {x.text}
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
              srcSet={`${phoneImg} 320w,  ${desktopImg} 768w`}
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