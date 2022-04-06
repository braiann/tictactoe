import React from "react";

export default function SliderOption({text, onClick, isSelected}) {
    return (
        <div className={`slider-option ${isSelected && 'selected'}`} onClick={onClick}>{text}</div>
    )
}