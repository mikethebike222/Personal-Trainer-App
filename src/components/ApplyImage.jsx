import gymInterior from '../images/gym-interior.jpg';
import styles from './ApplyImage.module.css'

const ApplyImage = () => {

    return(
        <div className = {styles.container}>
            <img className = {styles.image} src={gymInterior} height = "675" width = "1250" alt="gyminterior"/>
            <button className = {styles.buttonstyle}>
            Apply Now
            </button>
        </div>
    )

}

export default ApplyImage