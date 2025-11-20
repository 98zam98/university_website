import React from 'react'

import phoneImg from "../assets/img/place_holder_320_x_640.png";
import tabletImg from "../assets/img/place_holder_768_x_1536.png";
import desktopImg from "../assets/img/place_holder_1024_x_2048.png";

const PhoneMoving = () => {
    console.log(desktopImg);
    return (
        <div
            className=' absolute top-10 left-10 w-22 md:w-50 lg:w-72 '
        >
            <img
            className=' object-cover '
                src={desktopImg}
                // this depends on the device dpr
                srcSet={`${phoneImg} 320w, ${tabletImg} 768w, ${desktopImg} 1024w`}
                alt="Phone"
                width={1200}
                height={800}
            />

        </div>
    );
}

export default PhoneMoving;