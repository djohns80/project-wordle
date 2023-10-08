import React from "react";

function Banner({ lastGuess, answer, numGuesses, restartGame }) {
  const result = lastGuess === answer ? "happy" : "sad";

  return (
    <div className={`${result} banner`}>
      {result === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      )}
      {result === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={restartGame} ><strong>Try Again</strong></button>
    </div>
  );
}

export default Banner;
