import styles from './LoginRegisterFooter.module.css' 
import { PiCopyrightLight } from "react-icons/pi";

const LoginRegisterFooter = () => {
  return (
    <footer className={styles.footerContainer}>
        <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <li>contact us</li>
                <li>help center</li>
                <li>about us</li>
                <li>plans & pricing</li>
                <li>privacy policy</li>
            </ul>
        </nav>
        <div className={styles.footerdescription}>
        <p className={styles.info}><PiCopyrightLight size={22}/>2022 Bonsai Technologies Inc - Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (MemberFDIC), and Celtic Bank (MemberFDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice or representstion.</p>
        <div className={styles.conditions}>
          <p className={styles.terms}>terms</p>
          <p className={styles.credits}>credits</p>
        </div>
        </div>
    </footer>
  )
}

export default LoginRegisterFooter;
