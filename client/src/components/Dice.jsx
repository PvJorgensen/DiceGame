import React, { useState } from 'react'

export const Dice = ({roll, setPlayerOneRoll, setPlayerTwoRoll, disableButton, setIsGameRunning}) => {
    const [disabled, setDisabled] = useState(false) 

    function timeOutBtn () {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 1000);
    }

    function rollDice () {
        let playerOneRoll = Math.ceil(Math.random(1) *6)
        let playerTwoRoll = Math.ceil(Math.random(1) *6)
        setPlayerOneRoll(playerOneRoll)
        setPlayerTwoRoll(playerTwoRoll)
        timeOutBtn();
        setIsGameRunning(true)
    }

  return ( 
    <div>
        <button onClick={rollDice} disabled={disabled || disableButton}>Roll Dice</button>
    </div>
  )
}
