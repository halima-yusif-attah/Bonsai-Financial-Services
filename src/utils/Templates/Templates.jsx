import PropTypes from 'prop-types'
import styles from './Templates.module.css'

const Templates = ({data}) => {
  return (
    <div className={styles.templatesContainer}>
        {data.map((item, i) => (
            <div className={styles.tempCard} key={i}>
                <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

Templates.propTypes = {
    data: PropTypes.array.isRequired
}

export default Templates