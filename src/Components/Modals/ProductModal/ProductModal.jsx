import { useState, useContext } from 'react';
import styles from './ProductModal.module.css'
import { ModalContext } from '../../../utils/context/ModalContext';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GrDocumentText } from "react-icons/gr";
import { FaFileInvoiceDollar } from "react-icons/fa6";


const  ProductModal = ({ products }) => {
    const [selected, setSelected] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)


    const context = useContext(ModalContext)
    const { closeModal } = context;


    const workFlowContent = [
    {
      icon: <FaFileInvoiceDollar size={20}/>,
      titles: 'invoices',
      info: `get paid faster with automatic invoicing, online payment and more`,
      path: '/invoicing'
    },
    {
      icon: <GrDocumentText size={20}/>,
      titles: 'contracts',
      info: `protects your business with fully-customizable contracts templates. Edit and e-sign hassle free`,
      path: '/contracts'
    },
  ]


    const handleClicked = (index) => setSelected(index)

    const handleWorkFlowModal = () => {
        setModalIsOpen(true)
        setModalContent(workFlowContent)
    }
    const handleWorkFlowClick = (id) => {
        setSelected(id)
    }

    const isMcEqualWFc = isEqual(modalContent, workFlowContent);
    

  return (
    <div className={styles.container}>
        <div className={styles.products}>
           <div className="" >
             {products.slice(0,1).map((product, indx) => (

                <NavLink 
                    key={indx}
                    to={product.path}
                    onMouseEnter={() => handleWorkFlowModal()}
                    className={styles.product}
                >
                    <div className="">{product.icon}</div>
                    <p className={styles.title}>{product.titles}</p>
                    <p className={styles.info}>{product.info}</p>
                </NavLink>
              
            ))}

              {modalIsOpen && isMcEqualWFc && 
                    <div className={`${styles.container} ${styles.workFlow}`} onMouseLeave={closeModal}>
            <div className={`${styles.products} ${styles.workFlowProducts}`}>
                {workFlowContent.map((link, i) => (
                   
                      <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => handleWorkFlowClick (i)}
                    className={`${selected === i? styles.active : ''} ${styles.productsLink}`}
                    >
                        <div className="">{link.icon}</div>
                        <div className={styles.workFlowText}>
                        <p className={styles.title}>{link.titles}</p>
                        <p className={styles.info}>{link.info}</p>
                        </div>
                      </NavLink>
                   
                ))}
                
            </div>
        </div>
                } 
            </div>

            {products.slice(1,).map((product, indx) => (

                <NavLink
                    key={indx}
                    to={product.path}
                    onClick={() => handleClicked(indx)}
                    className={`${selected === indx ? styles.active : ''} ${styles.product}`}
                >
                    <div className="">{product.icon}</div>
                    <p className={styles.title}>{product.titles}</p>
                    <p className={styles.info}>{product.info}</p>
                </NavLink>
            ))}

             

        </div>
    </div>
  )
}
 

ProductModal.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductModal




export const TemplateModal = ({ templates }) => {

    const [selected, setSelected] = useState(0)
    const [ open, setOpen] = useState(false);

    const handleTemplateClick = (id) => {
        setSelected(id)
        setOpen(true)
    }
    
    

  return (
    <div className={`${styles.container} ${styles.temp}`}>
        <div className={styles.templates}>
            {templates.map((temp, indx) => (
                <div className={styles.template} key={indx}>
                    <div className={`${selected === indx? styles.activeTemp : ""}  ${styles.tempLinks}`} onMouseEnter={() => handleTemplateClick(indx)}>
                      <div className={styles.icon}>{temp.icon}</div>
                      <p className={styles.titles}>{temp.titles} templates</p>
                      {selected === indx? <FaChevronRight /> : ""}
                    </div>

                    {selected === indx && open &&
                    <div className={styles.featureContainer}>
                        {temp.feature.map((feat, id) => (
                            <div className={styles.featureTemps} key={id}>
                                <p className={styles.featTitles}>feature {temp.titles} templates</p>
                                 {feat.types.map((t, indx) => (
                                    <div className={styles.featureLinks} key={indx}>
                                        <p>{t} {temp.titles} template</p>
                                    </div>
                                        
                                    ))}
                                
                            </div>
                        ))}
                    </div>
}
                </div>
            ))}

        </div>
    </div>
  )
}

TemplateModal.propTypes = {
    templates: PropTypes.array.isRequired,
}
