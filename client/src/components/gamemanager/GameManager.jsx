import { useEffect, useState } from "react"
import { Player } from "../Player"
import { Dice } from "../Dice"
import styles from '../player.module.scss'

export const GameManager = () => {

    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerOneRoll, setPlayerOneRoll] = useState(0);
    const [playerTwoRoll, setPlayerTwoRoll] = useState(0);
    const [disableButton, setDisabledButton] = useState(false)
    const [isGameRunning, setIsGameRunning] = useState(false)


    useEffect(() => {
        if (playerOneRoll > playerTwoRoll) {
            setPlayerOneScore(playerOneScore +1)
        } else if (playerOneRoll < playerTwoRoll) {
            setPlayerTwoScore(playerTwoScore +1)
        }
    }, [playerOneRoll, playerTwoRoll])

    function Winner () {
        if (playerOneScore == 3) {
            setDisabledButton(true)
            return <h1>Player One Wins!</h1>
        } else if (playerTwoScore == 3) {
            setDisabledButton(true)
            return <h1>Player Two Wins!</h1>
        }
    }

    function RoundWinner () {
        if (playerOneRoll > playerTwoRoll ) {
            return <h3>Player One Wins The Round!</h3>
        } else if (playerTwoRoll > playerOneRoll) {
            return <h3>Player Two Wins The Round!</h3>
        } else if (playerTwoRoll == playerOneRoll && playerOneRoll != 0) { 
            return <h3>It's a tie</h3>
        }
        } 

        function ResetGame () {
            const reset = () => {
                setPlayerOneRoll(0)
                setPlayerTwoRoll(0)
                setPlayerOneScore(0)
                setPlayerTwoScore(0)
                setDisabledButton(false)
                setIsGameRunning(false)
            }
            return <button onClick={reset}>ResetGame</button>
        }


  return (
    <div>
        <div className={styles.playerContainer}>
        <Player name={'PlayerOne'} score={playerOneScore} playerRoll={playerOneRoll} />
        <Player name={'PlayerTwo'} score={playerTwoScore} playerRoll={playerTwoRoll}/>
        </div>
        <div className={styles.btnContainer}>
        <Dice setIsGameRunning={setIsGameRunning} disableButton={disableButton} setPlayerOneRoll={setPlayerOneRoll} setPlayerTwoRoll={setPlayerTwoRoll} />
        <ResetGame />
        </div>
        <RoundWinner />
        <Winner />
    </div>
  )
}
