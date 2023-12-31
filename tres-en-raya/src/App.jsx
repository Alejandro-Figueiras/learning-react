import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import WinnerModal from './components/WinnerModal'

const App = () => {
  const [board, setBoard] = useState(() => (
    window.localStorage.getItem("board"))
      ? JSON.parse(window.localStorage.getItem("board"))
      : Array(9).fill(null)
  )
  const [turn, setTurn] = useState((
    window.localStorage.getItem("board"))
      ? window.localStorage.getItem("board")
      :TURNS.X
  );
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    setBoard(Array(9).fill(null));
    // setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={TURNS.X == turn}>{TURNS.X}</Square>
        <Square isSelected={TURNS.O == turn}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
