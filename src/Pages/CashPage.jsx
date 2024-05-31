import BonsaiCash from "../Components/BonsaiCash/BonsaiCash"
import PageLayout from "../Components/PageLayout/PageLayout"
import styles from'./PLayout.module.css'

const CashPage = () => {
  return (
      <PageLayout padding={styles.padding3}>
        <BonsaiCash />
      </PageLayout>
   
  )
}

export default CashPage