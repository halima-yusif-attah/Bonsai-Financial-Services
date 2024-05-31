import styles from './WorkCoverage.module.css'
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { PiShapesDuotone } from "react-icons/pi";

const WorkCoverage = () => {

    const specificInfo = [
        {
            icon: <PiShapesDuotone size={105} color='#63cab2'/>,
            title: 'Built for All work Types',
            desc: 'We proudly back people with wide-ranging businesses-from design and marketing to development, writing and photography.'
        },
        {
            icon: <LiaGlobeAmericasSolid size={105} color='#63cab2'/>,
            title: 'Built for Global Businesses',
            desc: 'Bonsai has international coverage across the United States, Canada, UK, Austraila and more, with 180 currencies suported.'
        }
    ]


  return (
    <div>
        <div className={styles.workInfoTwo}>
            <div className={styles.generalInfo}>
                <p className={styles.workInfoTwoTitle}>Trusted by 500K+ self-emplyed workers and small businesses</p>
                <p className={styles.workInfoTwoText}>{`Whether you're just getting started or your business is booming, Bonsai has you covered.`}</p>
            </div>
            <div className={styles.specificInfoContainer}>
                 {specificInfo.map((specific, indx) => (
                    <div className={styles.specificInfo} key={indx}>
                    <div className={styles.specificInfoIcon}>{specific.icon}</div>
                    <div className={styles.specificInfoText}>
                        <p className={styles.specificInfoTitle}>{specific.title}</p>
                        <p className={styles.specificInfoDesc}>{specific.desc}</p>
                    </div> 
                    </div>
                ))}  
            </div>
            
        </div>
    </div>
  )
}

export default WorkCoverage