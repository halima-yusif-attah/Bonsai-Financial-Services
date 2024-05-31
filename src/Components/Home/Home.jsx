import styles from './Home.module.css'
import { LiaFileContractSolid } from "react-icons/lia";
import { GrDocumentText } from "react-icons/gr";
import { PiFolders } from "react-icons/pi";
import { PiClockLight } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineAccountBook } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import DynamicLogin from '../DynamicLogin/DynamicLogin';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import PreliminaryInfo from '../../utils/context/PreliminaryInfo/PreliminaryInfo';
import WorkCoverage from '../../utils/context/WorkCoverage/WorkCoverage';
import ReviewFeatures from '../../utils/context/ReviewFeatures/ReviewFeatures';


const Home = () => {

    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false)
    // const navigate = useNavigate();
   


    const serviceLinks = [
        {
            icon: <GrDocumentText size={50} color='#68697a'/>,
            label: 'proposals',
            text:[ {
                title: 'win more work',
                desc: 'with a few clicks, you can craft structured proposals with clear estimates to close your deals',
                info: 'explore proposals '
            }]
        },
        {
            icon: <LiaFileContractSolid size={50} color='#68697a'/>,
            label: 'contracts',
            text: [{
                title: 'protects your business',
                desc: 'simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.',
                info: 'explore contracts '
            }]
        },
        {
            icon: <PiFolders size={50} color='#68697a'/>,
            label: 'client CRM',
            text: [{
                title: 'stay organized',
                desc: 'manage your client ongoing projects all in one place. Organize all documents, files and payments together for you and your client.',
                info: 'explore projects '
            }]
        },
        {
            icon: <PiClockLight size={50} color='#68697a'/>,
            label: 'time tracking',
            text: [{
                title: 'keep it simple',
                desc: `easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.`,
                info: 'explore time tracking '
            }]
        },
        {
            icon: <FaFileInvoiceDollar  size={50} color='#68697a'/>,
            label: 'invoices',
            text: [{
                title: 'get paid faster',
                desc: 'create and organize invoices, receive updates about timelines, and have automatic payment reminders sent to you on your behalf.',
                info: 'explore invoices '
            }]
        },

        {
            icon: <AiOutlineAccountBook size={50} color='#68697a'/>,
            label: 'accounting & taxes',
            text: [{
                title: 'automate your finances',
                desc: `don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.`,
                info: 'explore accounting & taxes '
            }]
        }
    ]

    // const specificInfo = [
    //     {
    //         icon: <PiShapesDuotone size={70} color='#63cab2'/>,
    //         title: 'Built for All work Types',
    //         desc: 'We proudly back people with wide-ranging businesses-from design and marketing to development, writing and photography.'
    //     },
    //     {
    //         icon: <LiaGlobeAmericasSolid size={70} color='#63cab2'/>,
    //         title: 'Built for Global Businesses',
    //         desc: 'Bonsai has international coverage across the United States, Canada, UK, Austraila and more, with 180 currencies suported.'
    //     }
    // ]

    const reviews = [
        {
            info: 'David Mihim',
            infoTwo: 'Founder of Tidings Co',
            title: `"For all my Freelancer / Small Agency followers, I wish I'd disovorerd @bonsaiinc long ago - great template contract"`
        },
        {
            info: 'Nathaneal Smith',
            infoTwo: 'Product design',
            title: `"Ayone doing #freelance work should use @bonsaiinc  for contracts/payment. It's amazing saves boatloads time."`
        }
    ]

//     const Signup = () => {
//     navigate('/register')
//    }

    const handleSelected = (id) => {
        setOpen(true)
        setSelected(id)
    }

   
  return (
    <div className={styles.homeWrapper}>
        <div className={styles.greenBg}></div>
        {/* <div className={styles.homeInfo}>
            <p className={styles.homeInfoTitle}>Everything you need to run your business.</p>
            <p className={styles.homeInfoDesc}>{`Bonsai's all-in-one product suite with smart automation let's you focus on your passion, not your paperwork.`}</p>
        
            <div className={styles.homeLogin}>
                <input type="text" className={styles.email} placeholder='Enter your email'/>
                <div className={styles.homeBtn}>
                    <button type="submit" onClick={Signup}>start free</button>
                </div>
            </div>
        </div> */}
        <PreliminaryInfo>
           <p className={styles.homeInfoTitle}>Everything you need to run your business.</p>
           <p className={styles.homeInfoDesc}>{`Bonsai's all-in-one product suite with smart automation let's you focus on your passion, not your paperwork.`}</p>
        </PreliminaryInfo>

        <div className={styles.workInfoOne}>
            <p className={styles.workInfoOneTitle}>Make more, manage less</p>
            <p className={styles.workInfoOneText}>Bonsai integrates and automate every step of your business so it runs seamlessly - form proposal to tax season</p>
        
            <div className={styles.workInfographic}>
                <p className={styles.infographicTitle}>with bonsai</p>
                <div className={styles.infographicDiagram}>
                    <div className={styles.diagramOne}>
                        <GrDocumentText size={50} color='#63cab2'/><IoMdArrowForward size={40} color='#00b289'/>
                        <LiaFileContractSolid size={50} color='#63cab2' /><IoMdArrowForward size={40} color='#00b289'/>
                        <PiFolders size={50} color='#63cab2' />
                    </div>
                    <div className={styles.diagramTwo}>
                        <LiaFileInvoiceDollarSolid size={50} color='#63cab2'/><IoMdArrowForward size={40} color='#00b289'/>
                        <PiClockLight size={50} color='#63cab2' /><IoMdArrowForward size={40} color='#00b289'/>
                        <AiOutlineAccountBook size={50} color='#63cab2'/>
                    </div>
                </div>
            </div>
        
        </div>

            <div className={styles.serviceContainer}>            
              <div className={styles.serviceLinks}>
                {serviceLinks.map((link, id) => (
                    <div className={styles.kk} key={id}>
                    <NavLink className={`${styles.links} ${ selected === id? styles.active : ""}` }  onClick={() => 
                       {
                        handleSelected(id)
                       }} >
                        <div className={styles.apprentInfo}>
                        <div className={styles.icon}>{link.icon}</div>
                        <p className={styles.label}>{link.label}</p>
                        </div>
                    
                    </NavLink>

                     {open && selected === id ? 
                        <div className={styles.hiddenInfoContainer}>
            
                           {link.text.map((t, idx) => (
                              
                                <div className={styles.moreInfo} key={idx}>
                                 <p className={styles.moreInfoTitle}>{t.title}</p>
                                 <p className={styles.moreInfoDesc}>{t.desc}</p>
                                 <p className={styles.moreInfoLink}>{t.info}<span><IoMdArrowForward color='#00b289'/></span></p>

                              </div>
                           ))}
                        </div>
                        : 
                        ""}
                    </div>
                ))}
              </div>
              <div className={styles.peachBg}></div>
            </div>  

            <div className={styles.homeCoverage}>
              <WorkCoverage />
            </div>

        <div className={`${styles.homeReview}`}>
           <ReviewFeatures data={reviews} heading={``} padding={styles.padding} />
           
        </div>
         <DynamicLogin >
          <p>It&apos;s <span className={styles.yourText}>your</span> business.</p>
          <p>{`We're here to help it grow.`}</p>
        </DynamicLogin>
    </div>
  )
}

export default Home

 
                    