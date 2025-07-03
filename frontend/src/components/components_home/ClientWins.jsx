// ClientWins.jsx - Modern carousel with dots and smooth transitions
import React, { useState, useEffect } from 'react'
import styles from './Client.module.css'

const clients = import.meta.glob('../../images/clients/*.png', { eager: true })
const clientImages = Object
  .entries(clients)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, mod]) => mod.default)

const ClientWins = () => {
  const [idx, setIdx] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setIdx(i => (i - 1 + clientImages.length) % clientImages.length)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % clientImages.length)
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [idx])

  return (
    <div className={styles.clientContainer}>
      <h3 className={styles.clientText}>Client Wins</h3>
      
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <img 
            className={`${styles.carouselImage} ${isTransitioning ? styles.transitioning : ''}`} 
            src={clientImages[idx]} 
            alt={`Client transformation ${idx + 1}`} 
          />
          <button className={`${styles.carouselButton} ${styles.prev}`} onClick={prev}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className={`${styles.carouselButton} ${styles.next}`} onClick={next}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.carouselDots}>
          {clientImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === idx ? styles.active : ''}`}
              onClick={() => setIdx(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientWins