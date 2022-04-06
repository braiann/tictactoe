import React from "react";

export default function Button({text, className, onClick}) {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}