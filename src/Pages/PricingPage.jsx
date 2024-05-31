import AddOns from '../Components/AddOns/AddOns';
import PageLayout from '../Components/PageLayout/PageLayout';
import Pricing from '../Components/Pricing/Pricing';
import Faq from '../Components/FAQ/Faq'
import styles from'./PLayout.module.css'

const PricingPage = () => {
  return (
    <div>
        <PageLayout padding={styles.padding1}>
      <Pricing/>
      <AddOns/>
      <Faq />
      </PageLayout>
    </div>
  )
}

export default PricingPage