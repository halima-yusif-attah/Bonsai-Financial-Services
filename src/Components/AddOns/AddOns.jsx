import styles from './AddOns.module.css'

const AddOns = () => {

    const addonCards = [
        {
            title: "Collaborators",
            desc: "Invite other users to specific projects for limited access and functionality.",
            fee: "Free"
        },
        {
            title: "Partners",
            desc: "Invite other users full account access and company management.",
            fee: "9"
        },
        {
            title: "Bonsai Tax",
            desc: "Track expenses, identify write-offs, and estimate quaterly taxes easily.",
            fee: "10"
        },
    ]


  return (
    <div className={styles.addons}>
        <p className={styles.addonHeading}>Super charge your work with add-ons</p>

        <div className={styles.addonCards}>
            {addonCards.map((addon, index) => (
                <div className={styles.addonContainer} key={index}>
                    <div className={styles.addonText}>
                    <p className={styles.addonTitle}>{addon.title}</p>
                    <p className={styles.addonDesc}>{addon.desc}</p>
                    </div>
                    <div className={styles.addonFees}>
                    {(addon.fee === 'Free')? <p className={styles.addonFree}>{addon.fee}</p> :  <div className="addonFee">
                        <p className={styles.addonPrice}><span className={styles.addonSign}>$</span>{addon.fee} </p>
                        <span className={styles.addonTime}>/month</span>
                        </div>}
                    </div>
                    
                </div>

            ))}
        </div>

    </div>
  )
}

export default AddOns