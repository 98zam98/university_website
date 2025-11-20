import React, { useState } from 'react'
import NameArr from '../components/NameArr';
import TwoLineHeader from '../components/TwoLineHeader';
import AppearingText from '../components/AppearingText';

const navArr = [
  'College Search',
  'Recommendations',
  'Tracker',
  'Chat',
  'Application',
];

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className=' overflow-hidden h-screen w-screen  bg-2  '>
      <div className=' container mx-auto px-2 md:px-4 grid grid-cols-5 gap-4 ' >
        <div className='col-span-5 md:col-span-1  mt-4'>
          <NameArr
            isNav={true}
            arr={navArr}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            textColor={0}
          />
        </div>
        {/* <div className=" block md:hidden "></div> */}
        <article className='col-span-3' >
          <TwoLineHeader
            line1={"asdasd"}
            line2={"asdasd"}
          />
          <AppearingText
            text={" ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs  "}
          />
        </article>
        {/* <div className=" hidden md:block "></div> */}
      </div>
    </div>
  )
}

export default Explore;