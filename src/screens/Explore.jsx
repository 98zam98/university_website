import React from 'react'
import NameArr from '../components/NameArr';
import TwoLineHeader from '../components/TwoLineHeader';
import AppearingText from '../components/AppearingText';

const Explore = () => {
  return (
    <div className='h-screen bg-2 w-2xl '>
      <NameArr
        isNav={true}
        arr={[]}
      />
      <article>
        <TwoLineHeader
          line1={"asdasd"}
          line2={"asdasd"}
        />
        <AppearingText
          text={" ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs ldfnhgdfhgkhdfhs  "}
        />
      </article>
    </div>
  )
}

export default Explore;