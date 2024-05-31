import PropTypes from 'prop-types'
import styles from './Buttons.module.css'

const Buttons = ({ text, color }) => {
  return (
    <div className={`${styles.btn} ${color}`}>
        <button type="submit" className={color}>{text}</button>
    </div>
  )
}

Buttons.propTypes = {
    text: PropTypes.node.isRequired,
    color: PropTypes.node.isRequired,
}


export default Buttons