import Register from "../Components/Register/Register"
import { SignInPageLayout } from '../Components/PageLayout/PageLayout'

const RegisterPage = () => {
  return (
    <div>
        <SignInPageLayout>
          <Register/>
        </SignInPageLayout>
    </div>
  )
}

export default RegisterPage