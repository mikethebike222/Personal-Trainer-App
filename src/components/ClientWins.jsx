import React, { useState } from 'react'

// Gets all the pngs within the clients directory 
const clients = import.meta.glob('../images/clients/*.png', { eager: true })
const clientImages = Object
  .entries(clients)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, mod]) => mod.default)

const ClientWins = () => {

    const [idx, setIdx] = useState(0)

    // Function for going back in the list 
    const prev = () => setIdx(i => (i - 1 + clientImages.length) % clientImages.length)

    // Function for going forward in the list
    const next = () => setIdx(i => (i + 1) % clientImages.length)

    return (
        <div>
          <button onClick={prev}>‹</button>
          <img src={clientImages[idx]} alt={`Client ${idx+1}`} />
          <button onClick={next}>›</button>
        </div>
      )


}

export default ClientWins