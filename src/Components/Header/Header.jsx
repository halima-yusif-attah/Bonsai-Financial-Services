import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from '../../utils/context/AuthContext';
import { useEffect } from 'react'
import {useContext} from 'react'
import { ModalContext } from '../../utils/context/ModalContext'
import ProductModal, { TemplateModal } from '../Modals/ProductModal/ProductModal';
import { LiaFileContractSolid } from "react-icons/lia";
import { GrDocumentText } from "react-icons/gr";
import { PiClockLight } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineAccountBook } from "react-icons/ai";
import isEqual from 'lodash/isEqual';


const Header = () => {
  
  const context = useContext(ModalContext)
  const {user} = useAuth();
  const navigate = useNavigate();
  const { modalIsOpen, modalContent, openModal, closeModal } = context;
  

  const productContent = [
        {
            titles: 'bosai workflow',
            info: 'look professional, win more clients and manage your business from one place',
            path: '/'
        },
        {
            titles: 'bosai tax',
            info: 'track off expenses, maximize tax write-offs, and estimate taxes without the headache',
            path: '/bonsai_tax'
        },
        {
            titles: 'bosai cash',
            info: 'bonsai all in one financial hub. No fees and lightning fast payout',
            path: '/bonsai_cash'
        }
  ]

  const templateContent = [
        {
            icon: <GrDocumentText size={20}/>,
            titles: 'contract',
            feature: [{
                name: 'featured ',
                types: ['free contract maker', 'social media management contract template', 'graphic design contract template', 'digital marketing']

            }]
        },
        {
            icon: <GrDocumentText size={20}/>,
            titles: 'proposal',
            feature: [{
                types: ['graphic deesign', 'business', 'brand ambassador', 'data entry']

            }]
        },
        {
            icon: <LiaFileInvoiceDollarSolid size={20}/>,
            titles: 'invoice',
            feature:[ {
                types: ['social media', 'contractor', 'web developer', 'influencer']

            }]
        },
        {
            icon: <AiOutlineAccountBook size={20}/>,
            titles: 'quotes',
            feature: [{
                types: ['web design', 'interior design', 'digital marketing', 'video production']

            }]
        },
        {
            icon: <PiClockLight size={20}/>,
            titles: 'scope of work',
            feature: [{
                types: ['website development', 'digital marketing', 'consultant', 'interior design']

            }]
        },
        {
            icon: <LiaFileContractSolid size={20}/>,
            titles: 'brief',
            feature:[ {
                // name: 'featured',
                types: ['design', 'architecture', 'fashion', 'creative']

            }]
        },
    ]

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  })
  const handleClick = () => {
    navigate('/sign in')
  }

  const Signup = () => {
    navigate('/register')
  }
  const handleProductModal = () => {
    openModal(productContent)
  }
  const handleTemplateModal = () => {
    openModal(templateContent)
 
  }

  const isMcEqualPc = isEqual(modalContent, productContent);
  

  return (
    <header>
        <h1 className={styles.logo}> <NavLink to='/'>bonsai</NavLink></h1>

        <nav className={styles.navbar}>
            <ul className={styles.navlinks} onMouseLeave={closeModal}  >
                <NavLink to='' className={styles.product} onMouseEnter={handleProductModal}>
                   Products <IoIosArrowDown />
                    {
                   modalIsOpen && 
                   isMcEqualPc &&
                   <ProductModal products={productContent}/>
                  }
                  </NavLink>
                  
                <NavLink to=''  className={styles.template} onMouseEnter={handleTemplateModal}>
                  Templates <IoIosArrowDown />
                   {
                  modalIsOpen &&  
                  modalContent.length === templateContent.length &&
                  <TemplateModal templates={templateContent}/>
                  }
                </NavLink>
                 
                 
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
            </ul>
        </nav>

         {user? 
         
         <button type="button" className={styles.logout}>log out</button>
         :
          <div className={styles.btns}>   
          <button type="button" className={styles.login} onClick={handleClick}>log in</button>
          <button type="button" className={styles.startfree} onClick={Signup}>start free</button>
        </div>
        
        }
       
    </header>
  )
}

export default Header