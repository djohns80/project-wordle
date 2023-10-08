import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  console.info({ answer });

  function addGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  function restartGame() {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  const gameEnded =
    guesses[guesses.length - 1] === answer ||
    guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameEnded} />
      {gameEnded && (
        <Banner
          lastGuess={guesses[guesses.length - 1]}
          answer={answer}
          numGuesses={guesses.length}
          restartGame={restartGame}
        />
      )}
      <Keyboard checkedGuesses={checkedGuesses} />
    </>
  );
}

export default Game;
