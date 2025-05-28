import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div>
            <h2 className = {styles.footHeader}> JACOB OESTREICHER COACHING </h2>
            <h4 className = {styles.contact}> Contact Info </h4>
            <p className = {styles.textFormat}> Email: JacobOestreicher@gmail.com</p>
            <p className = {styles.textFormat}> Number: (914)-255-2133</p>

        </div>
    )
}

export default Footer