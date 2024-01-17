import styles from './Signup.module.css'

export default function Signup() {
    return(
       <>
      
<fieldset className={styles.fieldSet}>
<p className={styles.account}>Don't have an account?
   <span className={styles.signUp}>Sign up</span>
</p>  
</fieldset>
</>
   )
}
