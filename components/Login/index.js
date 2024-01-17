import styles from './Login.module.css'
import Image from 'next/image'


export default function Login() {
   return(
       <>
           <div className={styles.mainContainer}>
               <Image src={'instagram-wordmark.svg'} alt="logo" width={190} height={75} className={styles.instagramLogo}/>
                   <form className={styles.form}>
                       <fieldset className={styles.fieldSet}>
                           <input
                               id="username"
                               className={styles.userName}
                               type="text"
                               placeholder='Phone number, username, or email'
                           />     
                           <input
                               id="password"
                               className={styles.password}
                               type="password"
                               placeholder='Password'
                           />
                           <button className={styles.loginButton}>Log In</button>
                                <div className={styles.boxSpace}>
                                    <div className={styles.orLine}></div>
                                         <p className={styles.or}>OR</p>
                                    <div className={styles.orLine}></div>
                                </div>    
               <Image src={'/Facebook-Icon-PNG-1.png'} alt="facebook" width={24} height={24} className={styles.facebookLogo}/>
                               <span className={styles.facebook}>Log in with Facebook</span>              
                       </fieldset>
                                <p className={styles.forgotPassword}>Forgot password?</p>           

                   </form>
           </div>
       </>
   )
}
