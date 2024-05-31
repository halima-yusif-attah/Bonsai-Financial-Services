// import React from 'react'
import styles from './BonsaiCash.module.css'
import Buttons from '../../utils/Buttons/Buttons'
import card from '../../images/cardExchange.png'
import bill from '../../images/billPayment.png'
import dashboard from '../../images/dashboard.png'
import headshhot from '../../images/headshotWoman.png'
import phone from '../../images/phoneInHand.png'
import invoice from '../../images/phoneInvoice.png'

const BonsaiCash = () => {

    const cardTypes = [
        {
            type: 'physical card',
            desc: 'get your new bonsai card in your pocket in just a few days'
        },
        {
            type: 'virtual card',
            desc: 'generate your virtual card for your online subscriptions and expenses'
        },
        {
            type: 'apple pay',
            desc: 'add your new card to tour Apple wallet for easy in-store and online payments'
        },
    ]
    const data = [
        {
            account: [{
                        title: 'one account for everything business',
                        info: 'manage your finaces, save on taxes, and get paid faster. All with no hidden fees and no minimums',
                        btn: 'sign up',
                        img: '../../assets/react.svg'
                    }],

            payments: [{
                        title: 'pay for your business expenses any way, anywhere',
                        info: cardTypes,
                        btn: '',
                        img: '../../images/phoneInHand.png' 
                    }],

            review: [{
                        title: 'with Bonsai Cash, I put my business finaces on one card, and in one location. My expenses are now much easier to track',
                        info: 'raewyn sangari, virtual assistant in los angeles, carlifornia',
                        btn: 'watch now',
                        img: '../../images/headshotWoman' 
                    }],
      
            management: [{
                        title: 'do less accounting work thanks to easy expense management',
                        info: 'expenses from your Bonsai card are automatically tracked. All you need to do is upload receipts from the app. Plus, tax write-offs are already calculated',                       
                        btn: 'sign up',
                        img: '../../images/billPaymnet.png' 
                    }],

            transactions: [{
                        title: 'receive your money faster',
                        info: 'collect your invoice payouts in your Bonsai Cash account in just seconds ',
                        btn: 'sign up',
                        img: '../../images/PhoneInvoice.png' 
                    }],

            savings: [{
                        title: 'save ahead of tax season',
                        info: 'Automatically set aside a portion of your earnings in custom envelopes for taxes, holidays or savings',
                        btn: 'try bonsai cash',
                        img: '../../images/dashboard.png' 
                    }],
     
        }
    ]

    console.log();
    // console.log("data-keys: ", data.keys())

    // const data = [
        
    //         {
    //                     title: 'one account for everything business',
    //                     info: [
    //                         {
    //                             type: '',
    //                             desc:  'manage your finaces, save on taxes, and get paid faster. All with no hidden fees and no minimums'
    //                         }
    //                        ],
    //                     btn: 'sign up',
    //                     img: '../../images/cardExchange.png'
    //                 },
    //                 {
    //                     title: 'pay for your business expenses any way, anywhere',
    //                     info: cardTypes,
    //                     btn: '',
    //                     img: '../../images/phoneInHand.png' 
    //                 },
    //                 {
    //                     title: 'with Bonsai Cash, I put my business finaces on one card, and in one location. My expenses are now much easier to track',
    //                     info: [{
    //                         type: '',
    //                         desc: 'raewyn sangari, virtual assistant in los angeles, carlifornia',
    //                     }],
    //                     btn: 'watch now',
    //                     img: '../../images/headshotWoman' 
    //                 },
    //                 {
    //                     title: 'do less accounting work thanks to easy expense management',
    //                     info: [
    //                         {
    //                             type: '',
    //                             desc: 'expenses from your Bonsai card are automatically tracked. All you need to do is upload receipts from the app. Plus, tax write-offs are already calculated'
    //                         },
    //                         ],
    //                     btn: 'sign up',
    //                     img: '../../images/billPaymnet.png' 
    //                 },
    //                 {
    //                     title: 'receive your money faster',
    //                     info: [
    //                         {
    //                             type: '',
    //                             desc: 'collect your invoice payouts in your Bonsai Cash account in just seconds '
    //                         }
    //                         ],
    //                     btn: 'sign up',
    //                     img: '../../images/PhoneInvoice.png' 
    //                 },
    //                 {
    //                     title: 'save ahead of tax season',
    //                     info: [
    //                         {
    //                             type: '',
    //                             desc: 'Automatically set aside a portion of your earnings in custom envelopes for taxes, holidays or savings'
    //                         }
    //                         ],
    //                     btn: 'try bonsai cash',
    //                     img: '../../images/dashboard.png' 
    //                 } 
        
    // ]
    // console.log("data-keys-array: ", data[0]&& data.slice(2,))

  return (
    <div className={styles.bonsaiCashContainer}>
        {data.map((d, index) => (
            <>
                <div className={styles.wrappers} key={index}>   
                {d.account.map((acc, i) => (
                    <div className={`${styles.container} ${styles.account}`} key={i}>
                       <div className={styles.accText}>
                          <p className={styles.title}>{acc.title}</p>
                          <p className={styles.info}>{acc.info}</p>
                       </div>
                        <div className={styles.acctBtn}><Buttons text={acc.btn} color={styles.signup} /></div>
                        <div className={styles.cardExchage}><img src={card} alt="card exchange" style={{ width: '800px', height: '350px' }} /></div>
                    </div>
                ))}

                {d.payments.map((acc, i) => (
                    <div className={`${styles.container} ${styles.payments}`} key={i}>
                        <div className={`${styles.title} ${styles.featuresTitle}`}><p>{acc.title}</p></div>
                        <div className={styles.paymentFeatureswrapper}>
                        <div className={styles.featText}>
                        {acc.info.map((types, idx) => (
                            <div className="" key={idx}>
                                <p className={styles.featuresType}>{types.type}</p>
                                <p className={styles.featuresDesc}>{types.desc}.</p>
                            </div>
                           
                        ))}
                        </div>
                        
                        <div className=""><img src={phone} alt="phone in hand" style={{ width: '550px', height: '365px' }} /></div>
                       </div>
                    </div>
                ))}

                {d.review.map((acc, i) => (
                    <div className={`${styles.container} ${styles.review}`} key={i}>
                        <div className={styles.sectionInfo}>
                        <p className={`${styles.info} ${styles.secInfo}`}>{acc.info}</p>
                        <p className={`${styles.title} ${styles.secTitle}`}>{acc.title}.</p>
                        <div className={styles.reviewBtn}><Buttons text={acc.btn} color={styles.watchnow}/></div>
                        </div>
                        <div className=""><img src={headshhot} alt="headshot" style={{ width: '450px', height: '250px' }} /></div>
                    </div>
                ))}

                {d.management.map((acc, i) => (
                    <div className={`${styles.container} ${styles.management}`} key={i}>
                       <div className={styles.mgtfeatureSection}>
                        <p className={`${styles.mgtTitle} ${styles.title}`}>{acc.title}</p>
                        <p className={`${styles.mgtInfo} ${styles.info}`}>{acc.info}</p>
                        <div className={styles.mgtBtn}><Buttons text={acc.btn} color={styles.signup}/></div>
                        </div>
                        <div className={styles.mgtImg}><img src={bill} alt="bill payment" style={{ width: '300px', height: '550px' }}/></div>
                    </div>
                ))}

                {d.transactions.map((acc, i) => (
                    <div className={`${styles.container} ${styles.transactions}`} key={i}>
                        <div className={styles.transFeatSection}>
                        <p className={`${styles.transTitle} ${styles.title}`}>{acc.title}</p>
                        <p className={`${styles.transInfo} ${styles.info}`}>{acc.info}</p>
                        <div className={styles.transBtn}><Buttons text={acc.btn} color={styles.signup}/></div>
                        </div>
                        <div className=""><img src={invoice} alt="card exchange" /></div>
                    </div>
                ))}

                {d.savings.map((acc, i) => (
                    <div className={`${styles.container} ${styles.savings}`} key={i}>
                        <div className={styles.savingsfeatSection}>
                        <p className={`${styles.savingsTitle} ${styles.title}`}>{acc.title}</p>
                        <p className={`${styles.savingsInfo} ${styles.Info}`}>{acc.info}</p>
                        <div className={styles.savingsBtn}><Buttons text={acc.btn} color={styles.signup}/></div>
                        </div>
                        <div className=""><img src={dashboard} alt="card exchange" /></div>
                    </div>
                ))}

                {/* {d.account.map((acc, i) => (
                    <div className="" key={i}>
                        <p>{acc.title}</p>
                        <p>{acc.title}</p>
                        <div className=""><Buttons text={acc.btn}/></div>
                        <div className=""><img src={acc.img} alt="card exchange" /></div>
                    </div>
                ))}

                {d.account.map((acc, i) => (
                    <div className="" key={i}>
                        <p>{acc.title}</p>
                        <p>{acc.title}</p>
                        <div className=""><Buttons text={acc.btn}/></div>
                        <div className=""><img src={acc.img} alt="card exchange" /></div>
                    </div>
                ))} */}
                        
                    
                   
                    
                </div>
            </>
        
        ))}
       
    </div>
  )
}

export default BonsaiCash