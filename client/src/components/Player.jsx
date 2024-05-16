import React from 'react'
import styles from './player.module.scss'

export const Player = ({score, name, playerRoll}) => {

  return (
    <>
    <div>
        <h2>Name: {name}</h2>
        <h4>Score: {score}</h4>
        <p>Roll: {playerRoll}</p>
    </div>
    </>
    )
}

