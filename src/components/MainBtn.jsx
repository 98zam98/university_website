import React from 'react'

const MainBtn = ({ text = "" }) => {
    return (
        <button className=" active:scale-95 transition-transform
            px-6 py-2 bg-primaryblue hover:bg-primaryblue/80  active:bg-primaryblue/20 text-white rounded-full 
            hover:-translate-y-1 hover:shadow-lg  duration-200 
            hover:scale-105
            hover:-rotate-3
            hover:rotate-y-30
 
        ">
            {text}
        </button>

    )
}

export default MainBtn;