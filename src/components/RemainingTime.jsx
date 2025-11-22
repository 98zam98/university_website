import React, { useEffect, useState } from 'react'

const sec = 1000;
const min = sec * 60;

const RemainingTime = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0
    });
    //   ==============================
    useEffect(() => {
        // month is 0-based → 11 = December
        const targetDate = new Date(new Date().getFullYear(), 11, 20);

        const updateCountdown = () => {
            const now = new Date();
            const diff = (targetDate - now) / sec;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }

            // 6o s in m
            const dm = diff / (60);
            const minutes = Math.floor((dm) % 60);
            // 60 m in h
            const dh = dm / (60)
            const hours = Math.floor((dh) % 24);
            // 24 h in day
            const days = Math.floor(dh / (24));

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown();
        // updates every minute
        const interval = setInterval(updateCountdown, min);
        return () => clearInterval(interval);
    }, []);

    //   ==============================
    return (
        <div className=' mt-4 text-primaryblack1 ' >
            <div className=' animate-bounce ' >⏳ Launching starts in</div>
            <div className="text-center">
                <div className="grid grid-cols-11 gap-4 text-5xl lg:text-8xl text-primaryblack2 
                    animate-pulse  
                ">
                    <div className='col-span-3'>{timeLeft.days}</div>
                    <div className='col-span-1'>:</div>
                    <div className='col-span-3'>{timeLeft.hours}</div>
                    <div className='col-span-1'>:</div>
                    <div className='col-span-3'>{timeLeft.minutes}</div>
                </div>
                <div className="grid grid-cols-11 gap-4  text-sm lg:text-1xl ">
                    <div className='col-span-3'>days</div>
                    <div className='col-span-1'></div>
                    <div className='col-span-3'>hours</div>
                    <div className='col-span-1'></div>
                    <div className='col-span-3'>minutes</div>
                </div>
            </div>
        </div>
    );
};

export default RemainingTime;