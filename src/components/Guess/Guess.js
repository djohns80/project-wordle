import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((r) => (
        <span
          key={r}
          className={`cell ${results ? results[r].status : undefined}`}
        >
          {results ? results[r].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
