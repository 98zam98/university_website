import React, { useEffect, useState } from 'react'

import phoneImg from "../assets/img/phone_moving_320_x_640.png";
import tabletImg from "../assets/img/phone_moving_768_x_1536.png";
import desktopImg from "../assets/img/phone_moving_1024_x_2048.png";

const PhoneMoving = ({ posFlag }) => {
    const [style, setStyle] = useState({});

    return (
        <div
            style={style}
            className={` w-22 md:w-50 lg:w-72 `}
        >
            <img
                className={` object-cover  transform transition duration-500
                    hover:rotate-x-12 hover:rotate-y-12 ${posFlag ? "" : "rotate-y-30 rotate-x-6"}   
                     hover:scale-105 
              `}
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