import styles from './LoginForm.module.css'
import { useAuth } from '../../utils/context/AuthContext';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submititing, SetSubmitting] = useState(false)

  const {user, login} = useAuth();
  
  const navigate = useNavigate();

  const loginForm = useRef(null);



 useEffect(() => {
  console.log('user-loginform-navigate-home', user)
  if (user) {
    navigate('/')
  }
 }, [])

   

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log('test email', emailRegex.test(input));
    return emailRegex.test(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    if (!email|| !password) {
      SetSubmitting(false)
      return
    }
    if (!validateEmail(email)) {
      SetSubmitting(false)
    }

    const userInfo = {email, password}
    SetSubmitting(true)
    login(userInfo)
    SetSubmitting(true)

     if (user) {
      navigate('/');
     }
  }

  return (
    <form action="" ref={loginForm} className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <p className={styles.loginTitle}>sign in</p>
        <p className={styles.or}> <span>or</span></p>

        <div className={styles.input}>
          <input type="email" name='email' className={styles.email} placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" name='password' className={styles.pswd} placeholder='Password' value={password} onChange={(event)=> {setPassword(event.target.value)}}/>
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="myCheckbox">
            <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue" />
            Remember me
          </label>
        </div>


        <div className={styles.loginBtn}>
          <button type="submit" disabled={submititing}>{submititing? 'Please wait...' : 'Log in'}</button>
        </div>

        <div className={styles.reset}>
          <p className={styles.resetLink}>reset password</p>
          <p className={styles.resetverify}>resend verification email</p>
        </div>
      </div>
    </form>
  )
}

export default LoginForm