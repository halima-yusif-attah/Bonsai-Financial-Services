import styles from './PageLayout.module.css';
import LoginRegisterHeader from '../Header/LoginRegisterHeader/LoginRegisterHeader';
import Header from '../Header/Header'
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import LoginRegisterFooter from '../Footer/LoginRegisterFooter/LoginRegisterFooter';


const PageLayout = ({ children, padding }) => {
  return (
    <div className={styles.layout}>
        <div className={styles.headerContainer}>
            <Header />
        </div>
        <div className={`${styles.content} ${padding}` }>
            {children}
        </div>
         <div className={styles.footerContainer}>
            <Footer />
        </div>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.node.isRequired,
};

export default PageLayout



export const SignInPageLayout = ({children, padding}) => {
   return (
    <div className={styles.layout}>
        <div className={styles.headerContainer}>
            <LoginRegisterHeader />
        </div>
        <div className={`${styles.content} ${padding}` }>
          <div className={styles.lightGreenBg}></div>
            {children}
        </div>
         <div className={styles.footerContainer}>
            <LoginRegisterFooter />
        </div>
    </div>
  )
}

SignInPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.node.isRequired,
};

