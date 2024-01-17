import styles from './Appstore.module.css'

export default function Appstore() {
    return(
       <>
       <p className={styles.getApp}>Get the app.</p>
            <div className={styles.appContainer}>
                <div>
                    <img src={'Screenshot 2024-01-16 at 5.29.20 PM.png'} alt="play store" width={300} height={50} className={styles.appleApp}/>
                </div>
            </div>
    </>
   )
}
