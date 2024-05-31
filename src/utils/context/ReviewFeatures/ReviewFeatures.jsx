import styles from './ReviewFeatures.module.css'
import PropTypes from 'prop-types'


const ReviewFeatures = ( { data, heading, padding }) => {
  return (
    <div className={`${styles.reviewFeaturesContainer}`}>
            <p className={styles.reviewFeatHeading}>{heading}</p>
            <div className={styles.featuresWrapper}> 
          {data.map((feat, i) => (
                
                <div className= {`${styles.features}  ${padding}`} key={i} >
                    <div className={styles.featIcon}>{feat.icon}</div>
                    <div className={styles.featText}>
                       <p className={styles.featTitle}>{feat.title}</p>
                       <div className={styles.infoText}>
                       <p className={styles.featInfo}>{feat.info}</p>
                       <p className={styles.featInfoTwo}>{feat.infoTwo}</p>
                      </div>
                    </div>
                </div>
            ))}            
    </div>
        </div>
    
  )
}

ReviewFeatures.propTypes = {
    data: PropTypes.array.isRequired,
    heading: PropTypes.node.isRequired,
    padding: PropTypes.node.isRequired,
}



export default ReviewFeatures