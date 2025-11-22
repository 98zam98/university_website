import React from 'react'

const MainBtn = ({ text = "" }) => {
    return (
        <button className="    cursor-pointer
            px-6 py-2 bg-primaryblue   active:bg-primaryblue/20 active:scale-75 text-white rounded-full 
            hover:-translate-y-1   duration-100 
            hover:scale-105
            hover:-rotate-3
            hover:rotate-y-10
            hover:shadow-2xl hover:shadow-primaryblack2 active:shadow-none
 
        ">
            {text}
        </button>

    )
}

export default MainBtn;