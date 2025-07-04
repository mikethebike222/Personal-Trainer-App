// Footer.jsx - Simple footer with CSS module
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.footerTitle}>JACOB OESTREICHER COACHING</h2>
            
            <div className={styles.contactInfo}>
                <a href="mailto:JacobOestreicher@gmail.com" className={styles.contactLink}>
                    JacobOestreicher@gmail.com
                </a>
            </div>
            
            <div className={styles.contactInfo}>
                <a href="tel:914-255-2133" className={styles.contactLink}>
                    (914) 255-2133
                </a>
            </div>
            
            <div className={styles.socialLinks}>
                <a 
                    href="https://www.instagram.com/jacoboestreichercoaching/" 
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <span className={styles.divider}>|</span>
                <a 
                    href="https://www.tiktok.com/@jacoboestreichercoaching" 
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TikTok
                </a>
            </div>
        </footer>
    )
}

export default Footer