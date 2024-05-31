import styles from './PreliminaryInfo.module.css'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PreliminaryInfo = ({ children }) => {
    const navigate = useNavigate()

     const Signup = () => {
    navigate('/register')
   }

  return (
    <div className={styles.homeInfo}>
           <div className={styles.PreliminaryInfo}> {children} </div>
          
            <div className={styles.homeLogin}>
                <input type="text" className={styles.email} placeholder='Enter your email'/>
                <div className={styles.homeBtn}>
                    <button type="submit" onClick={Signup}>start free</button>
                </div>
            </div>
        </div>
  )
}

PreliminaryInfo.propTypes = {
    children: PropTypes.node.isRequired
}

export default PreliminaryInfo