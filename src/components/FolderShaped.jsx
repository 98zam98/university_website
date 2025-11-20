import React from 'react'

const FolderShaped = ({ children }) => {
    return (
        <div
            className="w-48 h-36 bg-cover bg-center rounded-md shadow text-2
                "
        // style="background-image: url('/assets/img/place_holder_1024_x_1024.png');"
        >
            {children}
            test
        </div>
    );
}

export default FolderShaped;