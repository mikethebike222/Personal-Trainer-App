import gymInterior from '../images/gym-interior.jpg';
import ApplyImageButton from './ApplyImageButton';
import styles from './ApplyImage.module.css'

const ApplyImage = () => {

    return(
        <div>
            <img className = {styles.image} src={gymInterior} height = "675" width = "1250" alt="gyminterior"/>
            <ApplyImageButton/>
        </div>
    )

}

export default ApplyImage