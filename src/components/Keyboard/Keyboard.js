import React from "react";

function Keyboard({ checkedGuesses }) {

  const keyboardLayout = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["Z","X","C","V","B","N","M"],
  ];

  const letters = Object.fromEntries(
    checkedGuesses
      .map((results) => results.map(({ letter, status }) => [letter, status]))
      .flat()
  );

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map(key => (
            <div className={`letter ${letters[key] || ''}`} key={key}>{key}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
