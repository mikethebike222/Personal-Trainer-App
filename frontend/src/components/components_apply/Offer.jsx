import styles from './Offer.module.css'


const Offer = () => {
    return (
        <div className = {styles.offerContainer}>
            <h2 className = {styles.offerH2}>HERES WHAT<span className={styles.break}></span> YOU GET</h2>
            <ul className = {styles.offerUl}>
                <li>24/7 Access to my number to ask any questions you might have</li>
                <li>A full workout plan, or meal plan if you desire</li>
                <li>Video calls as desired</li>
                <li>Form Checks</li>
                <li>ACCOUNTABILITY!!!</li>
                <li>Structure, and learning how to train properly. </li>
            </ul>

        </div>
    )
}

export default Offer