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
  const [count, setCount] = useState(5)
  const [win, setWin]= useState()
  const handleGamePlay = (index) => {
    const newBoard = [...board]
    if (win) return
    setCount((prevCount) => prevCount -= 1)
    if (treasure === index) {
      newBoard[index] = "🐲"
      setWin("WIN")
    }
    else if (bomb === index) {
      newBoard[index] = "💣"
      setWin("LOSE")
    }
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
    setWin("")
    setCount(5)
    setBomb(Math.floor(Math.random()*board.length))
    setTreasure(Math.floor(Math.random()*board.length))
  }

  useEffect(()=> {
    if (treasure === bomb) {
      setBomb(Math.floor(Math.random()*board.length))
    }
  },[bomb, treasure])

  useEffect(()=>{
    if(count===0 && win === "WIN") 
    {setWin("WIN")}
    else if (count===0) {
      setWin("LOSE")
    }
  },[count, win])

  return (
    <div className="main">
      <h1>Treasure Hunt Game</h1>
      <div className="container">
        <div className="counter">
          <p>Count: {count}</p>
        </div>
      <div className="gameBoard">
      {board.map((item, index) => 
        <Square 
          item={item} 
          key={index}
          index={index}
          handleGamePlay={handleGamePlay}
        />)}
      </div>
      <div className="win-lose">
          <p>{win}</p>
        </div>
      </div>
      
    <div className="buttonDiv">
    <button id="submit" onClick={handleReset}>Reset</button>
    </div>
      
      
    </div>
  )
}

export default App
