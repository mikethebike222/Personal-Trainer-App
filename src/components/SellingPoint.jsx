import inspirePic from '../images/inspire.jpg';
import styles from './SellingPoint.module.css'


const SellingPoint = () => {
    return (
        <div className = {styles.inspireContainer}>
            <div className={styles.inspireText}>
            <h2 className = {styles.inspireHead}> If you’re thinking… another online coach… what does he know? </h2>
            <p className = {styles.inspireSub}>
                I am a NASM-certified personal trainer with over 3 and a half years of extreme training, 
                dieting, and consistency. Before starting online coaching, I did personal training in person. 
                After realizing I could expand my reach and help people worldwide, I started, helping over 30 happy clients with their fitness goals. 
            </p>
            </div>
            <img className = {styles.inspireImg} src={inspirePic}/>
        </div>
    )
}

export default SellingPoint