import React from 'react'

const TwoLineHeader = ({ line1, line2 }) => {
    const cls = ' text-3xl md:text-4xl  lg:text-5xl mb-3 ';
    return (
        <div className='group mb-7 md:mb-12 lg:mb-20  flex flex-col items-center  ' >
            <h1 className={cls + ' mr-16 md:mr-30 duration-700 group-hover:mr-0 '} >{line1}</h1>
            <h1 className={cls + ' ml-16 md:ml-30 duration-700 group-hover:ml-0 '} >{line2}</h1>
        </div>
    );
}

export default TwoLineHeader;