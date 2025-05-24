import gymInterior from '../images/gym-interior.jpg';
import ApplyImageButton from './ApplyImageButton';

const ApplyImage = () => {
    const imagestyle = {
        display: 'block',
        margin: '0 auto',
    }
    return(
        <div>
            <img style = {imagestyle} src={gymInterior} height = "675" width = "1250" alt="gyminterior"/>
            <ApplyImageButton/>
        </div>
    )

}

export default ApplyImage