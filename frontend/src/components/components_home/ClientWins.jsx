// ClientWins cycles through client images using previous and next buttons.

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
  
  // Function for going back in the list 
  const prev = () => {
    setIdx(i => (i - 1 + clientImages.length) % clientImages.length)
  }

  // Function for going forward in the list
  const next = () => {
    setIdx(i => (i + 1) % clientImages.length)
  }

    return (
        <div className = {styles.clientcontainer}>
          <h3 className = {styles.clienttext}>Client Wins</h3>
          <div className = {styles.clientimagebutton}>
            <button className = {styles.leftbutton} onClick={prev}>‹</button>
            <img className={styles.clientimage} src = {clientImages[idx]} alt={`Client ${idx+1}`} />
            <button className = {styles.rightbutton} onClick={next}>›</button>
          </div>
        </div>
      )


}

export default ClientWins