import './App.css';
import StartMenu from './components/StartMenu';
import React from 'react';
import Board from './components/Board';

function App() {
  const [isSinglePlayer, setIsSinglePlayer] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);

  function switchPlayerMode(mode) {
    setIsSinglePlayer(mode);
  }

  function switchGameState(state) {
    setGameStarted(state);
  }

  return (
    <div className="App">
      {gameStarted ?
        <Board isSinglePlayer={isSinglePlayer} endGame={() => switchGameState(false)}/> :
        <StartMenu
          isSinglePlayer={isSinglePlayer}
          switchPlayerMode={switchPlayerMode}
          startGame={() => switchGameState(true)}
        />
      }
    </div>
  );
}

export default App;
