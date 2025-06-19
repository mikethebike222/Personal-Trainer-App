// Component displaying a "Home" button that navigates back to the home page

import styles from './Back.module.css'
import { useNavigate } from 'react-router-dom'

// React Router navigation hook
const Back = () => {
    const navigate = useNavigate()
    return (
        <div className = {styles.buttonContainer}>
            <button onClick={() => navigate('/')} className = {styles.backbuttonstyle}>
            Home
            </button>
        </div>
    )
}

export default Back