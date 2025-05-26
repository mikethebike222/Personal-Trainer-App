import gymInterior from '../images/gym-interior.jpg';
import gymInterior from '../../images/gym-interior.jpg';
import styles from './ApplyImage.module.css'
import { useNavigate } from 'react-router-dom'

const ApplyImage = () => {

    const navigate = useNavigate()

    return(
        <div className = {styles.container}>
            <img className = {styles.image} src={gymInterior} height = "675" width = "1250" alt="gyminterior"/>
            <button onClick={() => navigate('/application')} className = {styles.buttonstyle}>
            Apply Now
            </button>
        </div>
    )

}

export default ApplyImage