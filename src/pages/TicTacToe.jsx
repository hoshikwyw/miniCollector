import React, { useState } from 'react'
import SubNavBar from '../components/SubNavBar';

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleClick = (index) => {
    if (board[index] === "" && currentPlayer && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      if (checkWinner(newBoard, currentPlayer)) {
        setWinner(currentPlayer);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const checkWinner = (board, player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer(null);
    setWinner(null);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentPlayer("X");
  };

  const renderCell = (index) => {
    return (
      <div
        key={index}
        className="w-16 h-16 flex rounded justify-center items-center bg-gray-400 hover:bg-gray-300 cursor-pointer border border-blue-900 shadow-lg shadow-slate-800"
        onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <>
      <SubNavBar title="TicTacToe" />
      <div className=" flex flex-col justify-center items-center p-5 rounded min-h-[calc(100vh-150px)]">
        <h2 className=" mb-4 text-2xl font-bold font-serif text-white">
          Tic Tac Toe Game
        </h2>
        {!gameStarted ? (
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white rounded"
            onClick={startGame}>
            Start Game
          </button>
        ) : (
          <div className="w-64">
            <div className=" grid grid-cols-3 gap-4 text-2xl font-bold">
              {board.map((cell, index) => renderCell(index))}
            </div>
            {winner && (
              <div className="mt-4 text-center">
                <p className="font-bold text-xl text-white">{winner} wins!</p>
                <button
                  className=" mt-2 px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white font-semibold rounded"
                  onClick={resetGame}>
                  Play Again
                </button>
              </div>
            )}
            {!winner && board.every((cell) => cell !== "") && (
              <div className="mt-4 text-center">
                <p className="font-bold text-xl">It's a draw!</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  onClick={resetGame}>
                  Restart
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default TicTacToe
