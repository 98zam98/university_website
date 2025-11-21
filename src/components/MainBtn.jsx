import React from 'react'

const MainBtn = ({ text = "" }) => {
    return (
        <button className=" active:scale-95 transition-transform
            px-6 py-2 bg-4 hover:bg-4/80  active:bg-4/20 text-white rounded-full  
        ">
            {text}
        </button>

    )
}

export default MainBtn;