/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { ID } from 'appwrite';
import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../appwrite';
// import  { useNavigation } from 'react-router-dom';



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    // const navigate = useNavigation()
    

    useEffect(() => {
        setLoading(false);
    }, [])

    useEffect(() => {
        console.log('user-auth-login-1', user);
        if(user) {
            console.log('user-auth-login-2', user);
            console.log('user succesffully logged in')
        }
    }, [user]);


        const login = async ( userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            
            if (!response.current) {
                console.log('response-status', response);
                throw new Error('Failed to create session');
            }
            const accountDetails = await account.get()
            setUser(accountDetails);
            if(user) {  
            console.log('user-auth-login-2', user);
            console.log('log in successfully')
        }

          
        }catch(error) {
            console.error(error)
        }
        // console.log('log in successfully')
        setLoading(false)
    }

    // const login = async ( userInfo) => {
    //     setLoading(true)
    //     try {
    //         let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
    //         console.log('response-init', response);

    //         if (!response.current) {
    //             console.log('response-status', response);
    //             throw new Error('Failed to create session');
    //         }
    //         const accountDetails = await account.get()
    //         console.log('accountDetails', accountDetails);
    //         setUser(accountDetails);

          
    //     }catch(error) {
    //         console.error(error)
    //     }
    //     console.log('log in successfully')
    //     setLoading(false)
    // }

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
    }

    const register = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1);
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            const accountDetails = await account.get()
            console.log('response', response);
            setUser(accountDetails);
        }catch(error) {
            console.error(error)
        }
        setLoading(true)
    }

    const checkStatus = async () => {}

    return (
        <AuthContext.Provider value = {{current: user, login, logout, register, checkStatus}} >
            {loading ? <p>Loading....</p> : children}
          
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthContext;






