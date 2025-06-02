import inspirePic from '../../images/inspire.jpg';
import styles from './SellingPoint.module.css'


const SellingPoint = () => {
    return (
        <div className = {styles.inspireContainer}>
            <div className={styles.inspireText}>
            <h2 className = {styles.inspireHead}> If you’re thinking… another online coach… what does he know? </h2>
            <p className = {styles.inspireSub}>
            I’m a NASM-certified personal trainer with over three and a half years of intense training, dieting, and consistency.
             Before I started coaching online, I worked as an in-person trainer. 
             Once I realized I could reach and help more people through online coaching, I made the transition.
              Since then, I’ve helped over 30 clients achieve their fitness goals.
            </p>
            </div>
            <img className = {styles.inspireImg} src={inspirePic}/>
        </div>
    )
}

export default SellingPoint