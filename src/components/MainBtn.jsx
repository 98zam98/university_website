import React from 'react'

const MainBtn = ({ text = "" }) => {
    return (
        <button className="px-6 py-2 bg-4 hover:bg-4/80 text-white rounded-full  transition">
            {text}
        </button>

    )
}

export default MainBtn;