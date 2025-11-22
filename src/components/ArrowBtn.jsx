import React from 'react'

const ArrowBtn = () => {
    return (
        <button className=" active:scale-95 transition-transform
            w-12 h-12 flex items-center justify-center rounded-full 
            border border-primarywhite2 text-primarywhite2 hover:bg-primaryblue/20 active:bg-primaryblue hover:text-primarywhite1 
            hover:scale-115
        ">
            →
        </button>
    );
};

export default ArrowBtn;