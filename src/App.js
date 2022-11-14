import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (index) => {
    const newBoard = [...board]
    newBoard[index] = "🦖"
    setBoard(newBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameBoard">
      {board.map((item, index) => 
        <Square 
          item={item} 
          key={index}
          index={index}
          handleGamePlay={handleGamePlay}
        />)}
      </div>
      
    </>
  )
}

export default App
