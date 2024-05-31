import {Info, DetailedInfo} from '../../../utils/Info/Info'
import styles from './BonsaiContract.module.css'
import PreliminaryInfo from '../../../utils/context/PreliminaryInfo/PreliminaryInfo'
import WorkCoverage from '../../../utils/context/WorkCoverage/WorkCoverage'
import DynamicLogin from '../../DynamicLogin/DynamicLogin'
import Templates from '../../../utils/Templates/Templates'
import ReviewFeatures from '../../../utils/context/ReviewFeatures/ReviewFeatures'

const BonsaiContract = () => {

    const contractDetails = [
        {
            title: "vetted templates",
            icon: ``,
            info: `use sructured freelace contract templates your own custom aggrements and even dtandard NDAs`
        },
        {
            title: "Electronic signature",
            icon: "",
            info: `send, sign and store your legally-bindings online contracts with your clients.`
        },
        {
            title: "auto remonders",
            icon: "",
            info: `auto remind your client for their signature and receive a notification when it is signed`
        }
        
    ]

    const DetailedInfoLists = [
        {
            title: "protect your business",
            info: `vetted by thousands of freelancers and top contract lawyers, select from a variety of contract templates or agreement templates`
        },
        {
            title: "stremline e-signature",
            info: `use a legally-binding e-signature to speed up the formalities when onboarding a new client relationship. Send it via Bonsai or using your own secure link`
        },
        {
            title: "automate reminders",
            info: `once sending your contract, stay up-to-date with automatic reminders to your client, as well as notifications for viewing and counter-signing`
        }
    ]

    const contractTemplatesLists = ['wedding makeup', 'builders', 'business coaching', 'business consulting', 'client', 'coach', 'construction', 'consulting agreement']

    const featuresLists = [
        {
            title: 'invoices',
            info: `gtet paid on time using smart invoicing with automatic reminders, red-receipts and a variety of payment options`
        },
        {
            title: 'proposals',
            info: `win more new clientd projects ith powerful proposal software, sercice package offerings and electronic approval`
        }
    ]

  return (
    <div className={styles.contractContainer}>
        <div className="">
            <p>contracts</p>
            <div className="">
                <PreliminaryInfo>
                    <div className="">
                        <p>flexible contracts to secure your business.</p>
                        <p>create and e-sign contract from vetted templates.</p>
                        <p>get peace of mind and get on your work</p>
                    </div>
                </PreliminaryInfo>
            </div>
        </div>

        <div className={styles.wrapper}>
            <Info data={contractDetails} text={`make sure you're being professional and protected with customizable work contracts.`}/>
            <DetailedInfo data={DetailedInfoLists}/>
        </div>

        <div className={styles.contractCoverage}>
            <WorkCoverage/>
        </div>

        <div className={styles.contractLogin}>
            <DynamicLogin text={`secure your work with Bonsai contracts`}/>
        </div>

        <div className="">
            <Templates data={contractTemplatesLists}/>
        </div>

        <div className="">
            <ReviewFeatures data={featuresLists} heading={`keep exploring bonsai's features`}/>
        </div>
    </div>
  )
}

export default BonsaiContract