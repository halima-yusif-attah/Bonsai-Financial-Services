// import React from 'react'
import Tax from "../Components/Tax/Tax"
import PageLayout from '../Components/PageLayout/PageLayout';
import styles from'./PLayout.module.css'

const TaxPage = () => {
  return (
    <PageLayout padding={styles.padding1}>
        <Tax />
    </PageLayout>
  )
}

export default TaxPage