import styles from './Info.module.css'
import PropTypes from 'prop-types'

export const Info = ({ data, text }) => {
  return (
    <div className={styles.taxBriefContainer}>
            <div className={styles.taxBriefHeading}>
                  <p>{text}</p>
            </div>

            <div className={styles.taxBenefitsContainer}>
                {data.map((item, id) => (
                    <div className={styles.benefitsCard} key={id}>
                        <div className={styles.benefitIcon}>{item.icon}</div>
                        <p className={styles.benefitTitle}>{item.title}</p>
                        <p  className={styles.benefitInfo}>{item.info}</p>
                    </div>
                ))}
            </div>
    </div>

  )
}

Info.propTypes = {
    data: PropTypes.array.isRequired,
    text: PropTypes.node.isRequired
}






export const DetailedInfo = ({data}) => {
  return (
    <div className={styles.detailedContainer}>
                {data.map((detail, indx) => (
                    <div className={styles.detailedCard} key={indx}>
                        <div className={styles.detailedText}>
                            <p className={styles.detailedTitle}>{detail.detailedTitle}</p>
                            <p className={styles.detailedInfo}>{detail.detailedInfo}</p>
                        </div>
                        <div className={styles.detailedDiagram}></div>
                    </div>
                ))}
    </div>
  )
}

DetailedInfo.propTypes = {
    data: PropTypes.array.isRequired,
    text: PropTypes.node.isRequired,
}




            
            
       