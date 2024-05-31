import styles from './Pricing.module.css'
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from 'react';




const Pricing = () => {

    const [selected, setSelected] = useState(false);

    const cards = [
        {
            types: 'Starter',
            desc: "Ideal for freelancers and contractors just starting out.",
            price1: '24',
            price2: '17',
            offers: ['All Templates', 'Unlimited clients & Projects', 'Invoicing and Payments', 'Proposals and Contracts', 'Client CRM', 'Expense Tracking', 'Up to 5 Project Collaborators']
        },

         {
            types: 'Professional',
            desc: "Everything a growing independent business needs to thrive.",
            price1: '39',
            price2: '32',
            offers: ['Everything in Starter plus', 'Custom branding', 'Forms and Questionnaires', 'Workflow Automations', 'Client Portal', 'QuickBooks Integration', 'Calendly Integration', 'Zappier Integration', 'Up to 15Collaborators']
        },

         {
            types: 'Business',
            desc: "The perfect package for small businesses and agencies.",
            price1: '79',
            price2: '52',
            offers: ['Everything in Stater and Professional plus...', 'Unlimited Subcontractor Management', 'Hiring Agreement Templates (1099 contracts)', 'Subcontractor Onboarding', 'Client CRM', 'Talent Pool', '3 Team Seats (additional seats $9/month)', 'Accountant Access', 'Connect Multiple Bank Accounts', 'Unlimited Subcontractors', 'Unlimited Project Collaborators']
        }
        
    ]

    const handleSelect = () => {
        setSelected(!selected);
        console.log('clicked-green-btn');
    }

    useEffect(() => {
        console.log('selected - ', selected);
    }, [selected])

  
  return (
    <div className={styles.priceWrapper}>
        <div className={styles.PriceHeader}>
            <h2 className={styles.title}>Plans & Pricing</h2>

            <div className={styles.duration}>
                <h4>Monthly</h4>
                <div className={selected? styles.selected :styles.toggleBtn} onClick={handleSelect}>
                    <div className={styles.pointer } ></div>
                </div>
                <div className={styles.yearly}>
                  <p className={styles.free}>2 months free!</p>
                  <h4>Yearly</h4>
                </div>
            </div>
        </div>

        <div className={styles.cards}>
            {cards.map((c, index)=> (  
                <div className={styles.wrapper} key={index}>
                    <div className={styles.heading}>
                      <h3 className={styles.type}>{c.types}</h3>
                      <p className={styles.desc}>{c.desc}</p>
                    </div>
                     
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>
                            {selected? <p><sup>$</sup>{c.price2}</p> : <p><sup>$</sup>{c.price1}</p>} 
                            <span className={styles.time}>/month</span>
                        </div>
                       {selected? <p className={styles.bill}>Billed yearly</p>: '' } 
                        
                    </div>
                    <div className={styles.offers}>
                        {c.offers.map((offer, idx) => (
                            <ul key={idx}>
                                <li><IoMdCheckmark color='#00b289'/>{offer}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={styles.btn}>
                        <button type="button">start free</button>
                    </div>
                </div>
            )
        )}
        </div>

    </div>
  )
}

export default Pricing