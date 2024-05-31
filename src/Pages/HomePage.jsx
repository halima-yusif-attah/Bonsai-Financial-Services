import Home from '../Components/Home/Home';
import PageLayout from '../Components/PageLayout/PageLayout';
import styles from'./PLayout.module.css'

const HomePage = () => {
  return (
    <div>
        <PageLayout padding={styles.padding1}>
            <Home/>
        </PageLayout>
    </div>
  )
}

export default HomePage