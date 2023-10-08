import React from "react";

function GuessInput({addGuess, disabled}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        addGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        disabled={disabled}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
