import React from 'react'
import NameArr from '../components/NameArr';
import TwoLineHeader from '../components/TwoLineHeader';
import AppearingText from '../components/AppearingText';


// <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
const Explore = () => {
  return (
    <div className=' overflow-hidden h-screen w-screen  bg-2  '>
      <div className=' container mx-auto px-2 md:px-4 grid grid-cols-5 gap-4 ' >
        <div className='col-span-5 md:col-span-1'>
          <NameArr
            isNav={true}
            arr={[]}
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