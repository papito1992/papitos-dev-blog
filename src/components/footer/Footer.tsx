import styles from "./footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>PapitoDev</div>
            <div className={styles.text}>
                Papito's Dev blog. All rights reserved.
            </div>
        </div>
    )
}
export default Footer