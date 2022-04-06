import React from "react";
import PlayersSlider from "./PlayersSlider";
import Button from "./Button";

export default function StartMenu(props) {
    return (
        <main>
            <PlayersSlider
                switchPlayerMode={props.switchPlayerMode}
                isSinglePlayer={props.isSinglePlayer}
            />
            <Button onClick={props.startGame} className="main" text="Comenzar"/>
        </main>
    )
}