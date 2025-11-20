import React from 'react'
import NameArr from './NameArr'

const NameInTopLeft = ({text=''}) => {
    return (
        <NameArr
            arr={[text]}
        />
    );
}

export default NameInTopLeft;