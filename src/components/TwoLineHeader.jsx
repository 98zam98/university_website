import React from 'react'

const TwoLineHeader = ({ line1, line2 }) => {
    const cls = ' text-3xl md:text-5xl  lg:text-7xl ';
    return (
        <div className=' mb-7 md:mb-12 lg:mb-20  ' >
            <h1 className={cls} >{line1}</h1>
            <h1 className={cls + ' ml-16 md:ml-40 '} >{line2}</h1>
        </div>
    );
}

export default TwoLineHeader;