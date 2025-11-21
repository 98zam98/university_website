import React, { useEffect, useState } from 'react'

import phoneImg from "../assets/img/phone_moving_320_x_640.png";
import tabletImg from "../assets/img/phone_moving_768_x_1536.png";
import desktopImg from "../assets/img/phone_moving_1024_x_2048.png";

const PhoneMoving = ({ posFlag }) => {
    const [style, setStyle] = useState({});

    return (
        <div
            style={style}
            // className={` absolute  ${posFlag ? "top-2/5 " : " top-4/12"}   ${posFlag ? "left-4/6" : "left-10/12"}  md:top-1/4 lg:top-1/2 ${posFlag ? "md:left-1/2" : "md:left-10/12"} -translate-x-1/2 -translate-y-1/2 w-22 md:w-50 lg:w-72 `}
            className={` w-22 md:w-50 lg:w-72 `}
        >
            <img
                className={` object-cover  transform transition duration-500
              hover:rotate-x-12 hover:rotate-y-12 ${posFlag ? "" : "rotate-y-45 rotate-x-6"}   `}
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