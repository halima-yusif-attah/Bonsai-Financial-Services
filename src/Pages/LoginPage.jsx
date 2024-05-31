import LoginForm from "../Components/LoginForm/LoginForm"
import { SignInPageLayout } from "../Components/PageLayout/PageLayout"
import styles from'./PLayout.module.css'

const LoginPage = () => {
  return (
    <div>
        <SignInPageLayout padding={styles.padding1}>
            <LoginForm/>
        </SignInPageLayout>
    </div>
  )
}

export default LoginPage