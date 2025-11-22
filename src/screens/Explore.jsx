import React, { useState } from 'react'
import NameArr from '../components/NameArr';
import TwoLineHeader from '../components/TwoLineHeader';
import AppearingText from '../components/AppearingText';
import PhoneMoving from '../components/PhoneMoving';

const navArr = [
  'College Search',
  'Recommendations',
  'Tracker',
  'Chat',
  'Application',
];

// TwoLineHeader ->line1
// TwoLineHeader ->line2
// AppearingText
const arr = [
  ['Comprehensive', 'College Search', 'Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including locations, majors, campus facilities, and more. find the perfect fit for your educational journey.'],
  ['Personalized', 'Advising', 'Stay organized with an intuitive application tracker. Monitor the progress of your applications, track deadlines, and receive reminders to submit required documents. Never miss an important milestone on your path to higher education.'],
  ['Engaging', 'Experts Chat', 'Receive tailored recommendations based on your interests, academic achievements, and career aspirations. Discover colleges and programs that align with your goals, ensuring you make informed decisions about your future.'],
  ['Application', 'Tracker', 'Feel free to inquire, seek counsel, and acquire valuable perspectives to assist you in making well-informed choices regarding your college applications. Receive tailored guidance and assistance every step of the way.'],
  ['Seamless', 'Application', 'Submit applications directly through the app. Save time by completing and submitting forms electronically. Enjoy a hassle-free application process with streamlined document uploads and easy communication with admissions offices.'],
];
const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className=' overflow-hidden  min-h-screen w-screen  bg-primaryblack1 pt-20 md:pt-52  relative '>
      <div className=' container mx-auto px-2 lg:px-4 grid grid-cols-6 gap-4 ' >
        <div className='col-span-4 lg:col-span-1  mt-4'>
          <NameArr
            isNav={true}
            arr={navArr}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            textColor={"primarywhite1"}
          />
        </div>
        <div className=" lg:hidden col-span-2 flex justify-center items-center "><PhoneMoving posFlag={false} /></div>
        <article className='col-span-6  lg:col-span-3 text-primarywhite1  px-5 md:px-2 mb-20 ' >
          <TwoLineHeader
            line1={arr[selectedIndex][0]}
            line2={arr[selectedIndex][1]}
          />
          <AppearingText
            indent={10}
            text={arr[selectedIndex][2]}
          />
        </article>
        <div className=" hidden col-span-2 lg:flex justify-center items-center "><PhoneMoving posFlag={false} /></div>
      </div>
    </div>
  )
}

export default Explore;