import styles from '../Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from '../../../utils/context/AuthContext';
// import { useState } from 'react';

const Header = () => {

  const {user} = useAuth();
  const navigate = useNavigate();
  // const [submititing, SetSubmitting] = useState(false)
  console.log('user-header', user)

  const handleClick = () => {
    navigate('/sign in')
  }

  const Signup = () => {
    navigate('/register')
  }

  return (
    <header>
        <h1 className={styles.logo}> <NavLink to='/'>bonsai</NavLink></h1>

        {/* <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <NavLink to='/products' className={styles.product}>Products <IoIosArrowDown /></NavLink>
                <NavLink to='/templates'  className={styles.template}>Templates <IoIosArrowDown /></NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
            </ul>
        </nav> */}
       { console.log('user-header2', user)}

         {/* {user? 
         
         <button type="button" className={styles.logout}>log out</button>
         :""} */}

        <div className={styles.btns}>   
          <button type="button" className={styles.registerLogin} onClick={handleClick}>log in</button>
          <button type="button" className={styles.registerStartfree} onClick={Signup}>start free</button>
        </div>
        
       
    </header>
  )
}

export default Header