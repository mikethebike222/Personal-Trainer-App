import React, { useState } from 'react'
import styles from './Client.module.css'

// Gets all the pngs within the clients directory 
const clients = import.meta.glob('../../images/clients/*.png', { eager: true })
const clientImages = Object
  .entries(clients)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, mod]) => mod.default)

const ClientWins = () => {
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState('right')
  
  // Function for going back in the list 
  const prev = () => {
    setDirection('left')
    setIdx(i => (i - 1 + clientImages.length) % clientImages.length)
  }

  // Function for going forward in the list
  const next = () => {
    setDirection('right')
    setIdx(i => (i + 1) % clientImages.length)
  }

    return (
        <div className = {styles.clientcontainer}>
          <h3 className = {styles.clienttext}>Client Wins</h3>
          <div className = {styles.clientimagebutton}>
            <button className = {styles.leftbutton} onClick={prev}>‹</button>
            <img key={idx} className={`${styles.clientimage} ${direction === 'right' ? styles.slideFromRight : styles.slideFromLeft}`} src = {clientImages[idx]} alt={`Client ${idx+1}`} />
            <button className = {styles.rightbutton} onClick={next}>›</button>
          </div>
        </div>
      )


}

export default ClientWins