import React from 'react'

const NameArrInner = ({ arr, selectedIndex = 0, textColor = null, setSelectedIndex = null }) => {
    return (
        <ul className=' ml-3 ' >
            {
                arr.map((x, i) => {
                    return (<li key={x}
                        onClick={() => {
                            if (setSelectedIndex) {
                                setSelectedIndex(i);
                            }
                        }}
                        className={` mb-1.5 mt-1 text-${textColor ?? "primaryblack2 "}  
                         hover:scale-105 duration-500 active:scale-25
                        `}>{x}</li>);
                })
            }
        </ul>
    );
};
const NameArr = ({ arr = [], selectedIndex = 0, textColor = null, isNav = false, setSelectedIndex = null }) => {
    // console.log(arr);
    const n = arr.length;
    const perc = (1 / n) * 100;
    if (!n) {
        return null;
    }
    return (
        <div className=' flex ' >
            <div
                className='  relative '
                style={{
                    width: "7px",
                }}
            >
                <div
                    className=' bg-primaryblue w-full absolute duration-500  '
                    style={{
                        height: `${perc}%`,
                        top: `${selectedIndex * perc}%`,
                    }}
                >
                </div>
            </div>
            {
                isNav ?
                    (
                        <nav>
                            <NameArrInner
                                arr={arr}
                                selectedIndex={selectedIndex}
                                textColor={textColor}
                                setSelectedIndex={setSelectedIndex}
                            />
                        </nav>
                    )
                    :
                    (
                        <div>
                            <NameArrInner
                                arr={arr}
                                selectedIndex={selectedIndex}
                                textColor={textColor}
                                setSelectedIndex={setSelectedIndex}
                            />
                        </div>
                    )
            }
        </div>
    );
}

export default NameArr;