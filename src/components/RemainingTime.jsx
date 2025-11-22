import React, { useEffect, useState } from 'react'

const sec = 1000;
const thou60 = sec * 60;
const thou6060 = thou60 * 60;
const thou606024 = thou6060 * 24;

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
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }

            const days = Math.floor(diff / (thou606024));
            const hours = Math.floor((diff / (thou6060)) % 24);
            const minutes = Math.floor((diff / (thou60)) % 60);
            // const minutes = Math.floor((diff / (thou60)));

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, thou60); // updates every minute
        // const interval = setInterval(updateCountdown, 100); // updates every minute
        return () => clearInterval(interval);
    }, []);

    //   ==============================
    return (
        <div className=' mt-4 text-primaryblack1 ' >
            <div>⏳ Launching starts in</div>
            <div className="text-center">
                <div className="grid grid-cols-11 gap-4 text-5xl lg:text-8xl text-primaryblack2   ">
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