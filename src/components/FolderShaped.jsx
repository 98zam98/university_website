import React from 'react'

const defaultColor = "primaryblue";
const FolderShaped = ({ children, bgColor = null, borderColor = null }) => {
    return (
        <div
            className="
                 w-full h-full  flex flex-col duration-500
                 hover:scale-95  hover:rotate-x-10  hover:-rotate-y-5 rounded-4xl
                 hover:-translate-y-5 
            "
        >
            <div className={` w-1/3  bg-${borderColor ?? defaultColor} rounded-2xl aspect-square `}
                style={{
                    marginBottom: "-25%"
                }}
            ></div>
            <div
                className={` bg-cover bg-center rounded-4xl bg-${defaultColor}  bg-${bgColor ?? (borderColor ?? defaultColor)}  w-full flex-1 border-primaryblue  ${borderColor ? ` border-${borderColor}    border-6 ` : ""}  `}
            >
                {children}
            </div>
        </div>
    );
}

export default FolderShaped;