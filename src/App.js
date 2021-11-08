import "./App.css";
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [crossTurn, setCrossTurn] = useState(false);
  const [win, setWin] = useState("");
  const [filled, setFilled] = useState(false);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const items = new Array(9).fill("");
  const [array, setArray] = useState(items);

  useEffect(() => {
    checkWin(!crossTurn);
  }, [array]);

  const changeItem = (itemNumber) => {
    if (win) {
      return;
    }
    if (array[itemNumber] === "") {
      let data = crossTurn ? "cross" : "circle";
      setArray({ ...array, [itemNumber]: data });
      setCrossTurn(!crossTurn);
    } else {
      setFilled(true);
      setTimeout(() => {
        setFilled(false);
      }, 2000);
    }
  };

  const resetGame = () => {
    setArray(items);
    setCrossTurn(false);
    setWin("");
  };

  const checkWin = (crossTurn) => {
    let data = crossTurn ? "cross" : "circle";
    console.log(data);
    let win = winningCombinations.find((item) => {
      return item.every((i) => array[i] === data);
    });
    if (win) {
      setWin(`${data} wins the game !! `);
    }
  };

  const createCard = (arrayIndex) => <Card input={arrayIndex} />;

  const filledMessage = () => {
    if (filled) {
      return (
        <div className="text-center border border-warning mb-3">
          <h2>Already filled, Try another place!!</h2>
        </div>
      );
    }
  };
  const winMessage = () => {
    if (win) {
      return (
        <div className="border border-success mb-3 text-center">
          <h2>{win}</h2>
        </div>
      );
    }
  };

  return (
    <div className=" container">
      <div className="text-center">
        <h1>The Tic-Tac-Toe</h1>
      </div>
      {filledMessage()}
      {winMessage()}
      <div className="d-flex justify-content-center">
        <div className="row col-6">
          {items.map((item, index) => {
            return (
              <div
                className="col-4 border border-warning shadow p-0"
                aria-disabled={win}
                onClick={() => changeItem(index)}
                key={index}
              >
                {createCard(array[index])}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-success d-flex justify-content-center"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
