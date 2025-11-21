import React from 'react'
import NameArr from './NameArr'

const NameInTopLeft = ({ text = '', textColor }) => {
    return (
        <NameArr
            arr={[text]}
            textColor={textColor}
        />
    );
}

export default NameInTopLeft;