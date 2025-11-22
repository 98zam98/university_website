import React from 'react'

const AppearingText = ({text, isH2 = false, fontSize = null, indent = 0}) => {
    const classVar = (fontSize ? ("text-" + fontSize) : "")+"    " + (indent ? ("indent-" + indent) : "  ")+" hover:scale-105 duration-500 ";
    if (isH2) {
        return (
            <h2 className={classVar}>{text}</h2>
        );
    } else {
        return (
            <p className={classVar}>{text}</p>
        );
    }
}

export default AppearingText;