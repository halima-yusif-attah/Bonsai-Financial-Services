import styles from './Register.module.css'
import { useAuth } from '../../utils/context/AuthContext';
import { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";

const Register= () => {
  
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password1, setPassword1] = useState("");
   const [password2, setPassword2] = useState("");
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);

  const { register } = useAuth();
  
  // const navigate = useNavigate();
  const registerForm= useRef(null);


  const passwordVisibility1 = () => {
    setShowPassword1(!showPassword1)
  }
  const passwordVisibility2 = () => {
    setShowPassword2(!showPassword2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    console.log('email', email);
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if (password1 !== password2) {
      alert('Passwords do not match!')
      return;
    }

    const userInfo = {name, email, password1, password2}
    console.log('userInfo', userInfo );
    register(userInfo)
    console.log('successfully logged in');
    // navigate('/')
  }

  return (
    <form action="" ref={registerForm} className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <p className={styles.loginTitle}>sign up</p>

        <div className={styles.input}>
          <input type="name" name='name' className={styles.name} placeholder='Enter your full name' value={name} onChange={(event) => setName(event.target.value)} />
          <input type="email" name='email' className={styles.email} placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
          
          <div className={styles.pswd}>
            <div className={styles.pswd1}>
              <input type={showPassword1 ? 'text' : 'password'} name='password1' placeholder='Enter password' value={password1} onChange={(event)=> {setPassword1(event.target.value)}}  />
              <div className={styles.eye} onClick={passwordVisibility1}>
                {showPassword1? <PiEyeLight /> : <PiEyeSlashLight/>}
              </div>
             </div>

             <div className={styles.pswd2}>
              <input type={showPassword2 ? 'text' : 'password'} name='password2' placeholder='Confirm password' value={password2} onChange={(event)=> {setPassword2(event.target.value)}} />
              <div className={styles.eye} onClick={passwordVisibility2}>
                {showPassword2 ? <PiEyeLight /> : <PiEyeSlashLight/>}
              </div>
             </div>
          </div>
        </div>
    
        <div className={styles.loginBtn}>
          <button type="submit">Sign up</button>
        </div>

      </div>
    </form>
  )
}

export default Register