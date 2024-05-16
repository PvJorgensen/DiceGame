import React, { useState } from 'react'

export const Dice = ({roll, setPlayerOneRoll, setPlayerTwoRoll}) => {
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
    }

  return ( 
    <div>
        <button onClick={rollDice} disabled={disabled}>Roll Dice</button>
    </div>
  )
}
