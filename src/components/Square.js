import React from "react";

export default function({mark, onClick, gameWon}) {
    let markElement;
    if (mark === 1) {
        markElement = <p>X</p>
    } else if (mark === 2) {
        markElement = <p>O</p>
    }
    return (
        <div className={`square mark${mark}`} onClick={mark === 0 && !gameWon ? onClick : () => {}}>
            {markElement && markElement}
        </div>
    )
}