import React from 'react'

const TwoLineHeader = ({ line1, line2 }) => {
    return (
        <div>
            <h1>{line1}</h1>
            <h1>{line2}</h1>
        </div>
    );
}

export default TwoLineHeader;