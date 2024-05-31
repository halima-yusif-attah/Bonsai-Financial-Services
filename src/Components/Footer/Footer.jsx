import styles from "./Footer.module.css"

const Footer = () => {

    const details = [
        {
            services: 'product',
            links1: ['Proposals', 'Contracts', 'Invoicing', 'Client CRM', 'Time Tracking', 'Task TRacking', 'Forums', 'Accounting', 'Bonsai Tax', 'Bonsai Cash'],
            links2: ['Pricing', 'Bonsai Reviews'],
            links3: []
        },
        {
            services: 'free resources',
            links1: ['Freelance Resources', 'Freelance Blog by Bonsai', 'How to Write a Contract', 'Online Signature Marker'],
            links2: ['Self Employed Taxes Hub', 'Self Employed Taxes Calculator', 'Self Employed Taxes Deductions'],
            links3: []
        },
        {
            services: 'bonsai',
            links1: ['About', 'Carrers', 'Support', 'LinkedIn', 'Twitter', 'Privacy policy', 'Legal'],
            links2: ['Affiliates', 'Write for Us'],
            links3: ['Comparisons']
        },
        {
            services: 'templates',
            links1: ['Invoice Templates', 'Proposals Templates', 'Contract Templates', 'Agreement Templates', 'Scope of Work Templates', 'Quotes Templates', 'Credit Note Templates', 'Estimate Templates', 'Forum Templates'],
            links2: [],
            links3: []
        }
    ]
  return (
    <div className={styles.footerWrapper}>
       
        {details.map ((detail, index) => (
            <div className={styles.footer} key={index}>
               {/* className={`${detail.services === 'TEMPLATES' ? 'temp' : '' } service`} */}
                <h4 className={styles.service}>
                  {detail.services}
                </h4>

                <div className={styles.linksContainer}>
                   
                   <div className={styles.link1}>
                   {detail.links1.map((l1, id) => (
                      <p key={id}>{l1}</p>
                   ))}
                   </div>
 
                   <div className={styles.link2}>
                   {detail.links2.map((l2, idx) => (
                      <p key={idx} className={styles.link2}>{l2}</p>
                   ))}
                   </div>

                   <div className={styles.link3}>
                   {detail.links3.map((l3, indx) => (
                      <p key={indx}>{l3}</p>
                   ))}
                   </div>
                  
    
                </div>
            </div>
        ))}
       
    </div>
  )
}

export default Footer