import gymInterior from '../images/gym-interior.jpg';

const ApplyImage = () => {
    const imagestyle = {
        display: 'block',
        margin: '0 auto',
    }
    return(
        <div>
            <img style = {imagestyle} src={gymInterior} height = "675" width = "1250" alt="gyminterior"/>
        </div>
    )

}

export default ApplyImage