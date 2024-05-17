import React, { useEffect, useState } from 'react'
import styles from './player.module.scss'

export const Player = ({score, playerRoll, isGameRunning, disalbeButton}) => {

    const [playerName, setPlayerName] = useState('')
    const [disableInput, setDisableInput] = useState(false)

    useEffect (() => {
        if ( !isGameRunning && playerName ) {
            setPlayerName('')
        }

    }, [isGameRunning, disalbeButton])

  return (
    <>
    <div>
        <h2>Name: {playerName}</h2>
        <h4>Score: {score}</h4>
        <p>Roll: {playerRoll}</p>
        <div>
        {! disableInput &&<>
        <input type="text" placeholder='Insert name' onChange={(event) => {setPlayerName(event.target.value)}}/> 
        <button onClick={ () => {setDisableInput(true)}}>SetName</button></>
        }
        </div>
    </div>
    </>
    )
}

