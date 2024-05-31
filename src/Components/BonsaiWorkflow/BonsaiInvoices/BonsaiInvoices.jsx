import PreliminaryInfo from '../../utils.'
import dtyles from 'module.css'

const BonsaiInvoices = () => {
  return (
    <div className={styles.invoiceContainer}>
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
            <Info data={d}/>
        </div>
    </div>
  )
}

export default BonsaiInvoices