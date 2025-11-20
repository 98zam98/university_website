import React from 'react'

const TwoLineHeader = ({ line1, line2 }) => {
    const cls = ' text-3xl md:text-8xl ';
    return (
        <div>
            <h1 className={cls} >{line1}</h1>
            <h1 className={cls + ' ml-16 md:ml-40 '} >{line2}</h1>
        </div>
    );
}

export default TwoLineHeader;