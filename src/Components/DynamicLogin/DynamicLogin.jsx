import styles from './DynamicLogin.module.css'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DynamicLogin = ({ children }) => {

  const navigate = useNavigate();

  const Signup = () => {
    navigate('/register')
   }


  return (
    <div className={styles.dynamicLogin}>
        <div className={styles.dynamicLoginWrapper}>
            <div className={styles.dynamicLoginText}>{children}</div>

        <div className={styles.btns}>
        <button type="button" className={styles.startfree} onClick={Signup}>start free</button>
        </div>
        </div>
    </div>
  )
}

DynamicLogin.propTypes = {
  children: PropTypes.node.isRequired
};

export default DynamicLogin