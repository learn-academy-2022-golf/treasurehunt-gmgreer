import React, { useState } from "react"
import { useEffect } from "react"
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
  const [treasure, setTreasure] = useState(Math.floor(Math.random()*board.length))
  const [bomb, setBomb] = useState(Math.floor(Math.random()*board.length))

  const handleGamePlay = (index) => {
    const newBoard = [...board]
    if (treasure === index) newBoard[index] = "🐲"
    else if (bomb === index) newBoard[index] = "💣"
    else newBoard[index] = "🦖"
    setBoard(newBoard)
  }

  const handleReset = () => {
    setBoard([
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
  }

  useEffect(()=> {
    if (treasure === bomb) {
      setBomb(Math.floor(Math.random()*board.length))
    }
  },[bomb, treasure])

  return (
    <div className="main">
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
    <div className="buttonDiv">
    <button id="submit" onClick={handleReset}>Reset</button>
    </div>
      
      
    </div>
  )
}

export default App
