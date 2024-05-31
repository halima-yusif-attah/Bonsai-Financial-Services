import { useState } from "react";
import DynamicLogin from "../DynamicLogin/DynamicLogin"
import styles from './Faq.module.css'
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(Array(4).fill(false))

  const queries = [
    {
      querie: `How does the free trial work`,
      response: `when you start with your freee trial with Bonasi you'll receive full, unlimited access to all of of Bonsais Workflow or Workflow Plus Features! You 
      'll need to enter your credit card information to begin your trial, but don't worry - we won't charge anything until the subscription ends! If you wish to cansel at any time during the trial period, you can do so through your Subscription Settings page.`,
    },
    {
      querie: `Can I change plans anytime`,
      response: `Yes, you can change from within your account. If you have already subsccribed to a plan, or wabt to downgrade or upgrade your current one, you can do this by going to tour "Settings" and "Subcription".`,
    },
    {
      querie: `How do I pause my bonsai subscription`,
      response: `We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain Active! The good news is that you can cancel or pause your monthly subscription at any timewithout penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to Bonsai account`,
    },
    {
      querie: `What is your refund policy`,
      response: `If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you! Beyound those 2 weeks, you'll need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.`,
    }
  ]

  const handleClick = (id) => {
    // setSelected(id);
    setOpen((prevState) => {
      const newState = [...prevState]
      console.log('newState-init', newState);
      const isCurrentlyOpen = newState[id]
      newState[id] = !isCurrentlyOpen
      console.log('newState[id]', id);
      console.log('newState[id]', isCurrentlyOpen);
      console.log('newState-after', newState);
       setSelected(isCurrentlyOpen ? null : id);
      return newState
    })
  }
  
  return (
    <div className={styles.moreInfo}>
        <DynamicLogin >
          <p>It&apos;s <span className={styles.yourText}>your</span> business.</p>
          <p>{`We're here to help you grow.`}</p>
        </DynamicLogin>

        <div className={styles.faq}>
          <div className={styles.faqTitle}>
            <h4>Frequently asked questions</h4>
          </div>

          <div className={styles.questionsContainer}>
            {queries.map((q, indx) => (

              <div className={styles.questionCard} key={indx}>
                <p className={styles.questions} onClick={()=>handleClick(indx)}>  {q.querie}? <IoIosArrowDown color="#8a8a8c"/></p>
                 {open[indx] && selected === indx && <p className={styles.response}>{q.response}.</p>}
                 
              </div>

            ))}

          </div>
        </div>
    </div>
  )
}

export default Faq;