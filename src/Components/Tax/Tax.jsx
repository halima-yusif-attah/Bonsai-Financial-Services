import styles from './Tax.module.css'
import PreliminaryInfo from "../../utils/context/PreliminaryInfo/PreliminaryInfo"
import { PiHouseLineBold } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { Link } from 'react-router-dom';
import DynamicLogin from '../DynamicLogin/DynamicLogin';
import ReviewFeatures from '../../utils/context/ReviewFeatures/ReviewFeatures';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import WorkCoverage from '../../utils/context/WorkCoverage/WorkCoverage'
import {Info, DetailedInfo} from '../../utils/Info/Info'


const Tax = () => {

    const benefits = [
        {
            icon: <HiOutlineReceiptTax size={100} color='#00b289'/>,
            title: 'track expenses',
            info: 'auto-imports expenses from bank and credit cards, then classify and track on web and mobile apps'
        },
         {
            icon: <BsGraphUp size={100} color='#00b289'/>,
            title: 'identify write-offs',
            info: 'bonsai tax automatically identifies expenss tat are deductible to save you extra money at tax time'
        },
         {
            icon: <PiHouseLineBold size={100} color='#00b289'/>,
            title: 'estimates quaterly taxes',
            info: 'never get caught by a surprise tax bill again. Bonsai Tax analyzes your spending to estimate taxes due'
        },
    ]

    const benefitsDetailed = [
        {
            detailedTitle: 'automate expenses',
            detailedInfo: `connect your bank and credit / debit card accounts to automatically import and ${<span>{'organize tax receipts'}</span>}`
        },
        {
            detailedTitle: 'maximize write-offs',
            detailedInfo: `Bonsai Tax is designed to identify and ${<Link className={styles.detailedLinks}>categorize receipts for taxes</Link>}. So, our app can help you maximize your savings at the end of the year`
        },
         {
            detailedTitle: 'estimate quartely tax',
            detailedInfo: `our ${<Link className={styles.detailedLinks}>tax software for freelancers</Link>}, uses your tracked income, expenses, and deductions to give you live estimates of the taxes you will owe`
        },
    ]

    const bonsaiFeatures = [
        {
            icon: <FaFileInvoiceDollar size={150} color='#00b289'/>,
            title: 'invoice',
            info: 'get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options'
        },
        {
            icon: <LiaFileContractSolid size={150} color='#00b289'/>,
            title: 'contracts',
            info: 'protect your business with templated work contracts vetted by contract attorneys and thousands of freelancers'
        },
    ]


  return (
    <div className={styles.taxContainer}>
        <div className={styles.preliminaryWrapper}>
        <div className={styles.taxLogo}>
            <HiOutlineReceiptTax size={50} color='#00b289'/> 
            <p>bonsai tax</p>
        </div>
        <PreliminaryInfo>
            <p className={styles.infoOne}>Software for freelancers to track 1099 expenses & keep a peace of mind at tax time</p>
            <p className={styles.infoTwo}>Bonsai Tax is built exclusively for self employed workers to track expenses, maxixmize tax write-offs, and estimate quaterly taxes</p>
        </PreliminaryInfo>
        </div>

        <div className={styles.BenefitsWrapper}>
          <Info data={benefits} text={`Save an average of $5,600 per year and avoid surprise bills at tax time`}/>
          <DetailedInfo data={benefitsDetailed} />
        </div>

        <div className={styles.coverage}>
            <WorkCoverage/>
        </div>

        <div className={styles.dynamicContainer}>
        <DynamicLogin >
          <p className={styles.dynamicHeading}>Start saving on taxes and get a financial peace of mind.</p>
        </DynamicLogin>
        </div>

        <div className={styles.f}>
          <ReviewFeatures data={bonsaiFeatures} heading={`keep exploring bonsai's features`} padding={styles.padding} />
        </div>
    </div>
  )
}

export default Tax