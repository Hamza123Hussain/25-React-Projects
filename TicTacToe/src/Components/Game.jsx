import { useEffect, useState } from 'react'
import './Style.css'
import Sqaure from './Sqaure'

export default function Game({ sqauress = 9 }) {
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState('')
  const [restarts, setrestart] = useState(false)

  function winner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ]

    for (let index = 0; index < winningPatterns.length; index++) {
      const [x, y, z] = winningPatterns[index]
      if (squares[x] && squares[x] == squares[y] && squares[x] == squares[z]) {
        return squares[x]
      }
    }
    return null
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares]
    if (winner(cpySquares) || cpySquares[getCurrentSquare]) return
    cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O'
    setIsXTurn(!isXTurn)
    setSquares(cpySquares)
  }

  function restart() {
    setIsXTurn(true)
    setSquares(Array(9).fill(''))
    setrestart(false)
  }

  useEffect(() => {
    if (!winner(squares) && squares.every((item) => item !== '')) {
      setStatus('THIS IS A DRAW')
      setrestart(true)
    } else if (winner(squares)) {
      setStatus(`${winner(squares)} has won the game`)
      setrestart(true)
    } else {
      setStatus(` ${isXTurn ? 'X' : 'O'} has the next turn`)
    }
  }, [squares, isXTurn])

  return (
    <div className="tic-tac-toe-container ">
      {Array.from({ length: Math.ceil(sqauress / 3) }, (_, row) => (
        <div key={row} className="row">
          {Array.from({ length: 3 }, (_, col) => {
            const index = row * 3 + col
            return (
              <Sqaure
                key={index}
                value={squares[index]}
                onclick={() => handleClick(index)}
              />
            )
          })}
        </div>
      ))}
      <h1>{status}</h1>
      {restarts ? <button onClick={restart}>Restart</button> : ''}
    </div>
  )
}
