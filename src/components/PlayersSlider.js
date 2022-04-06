import React from "react";
import Button from "./Button";
import SliderOption from "./SliderOption";

export default function PlayersSlider(props) {
    return (
        <div className="slider">
            <Button className={`selection-indicator ${props.isSinglePlayer ? 'single-player' : 'multi-player'}`}/>
            <SliderOption onClick={() => props.switchPlayerMode(1)} text="1 Jugador" isSelected={props.isSinglePlayer}/>
            <SliderOption onClick={() => props.switchPlayerMode(0)} text="2 Jugadores" isSelected={!props.isSinglePlayer}/>
        </div>
    )
}