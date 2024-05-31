import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PricingPage from './Pages/PricingPage'
import RootLayout from './Pages/RootLayout/RootLayout'
import LoginPage from './Pages/LoginPage'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { AuthProvider } from './utils/context/AuthContext'
import RegisterPage from './Pages/RegisterPage'
import ModalProvider from './utils/context/ModalContext'
import TaxPage from './Pages/TaxPage'
import CashPage from './Pages/CashPage'
import ReviewsPage from './Pages/ReviewsPage'
// import './index.css'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
        path: '/',
        index: true,
        element: <HomePage/>
      }
      ]
    },
    {
      
      element: <ProtectedRoutes/>,
      children: [
        {
          path: '/pricing',
          element: <PricingPage/>
        },
        {
          path: '/bonsai_tax',
          element: <TaxPage/>
        },
        {
          path: '/bonsai_cash',
          element: <CashPage/>
        },
        {
          path: '/reviews',
          element: <ReviewsPage/>
        }
      ]
      
    },
    {
      path: '/sign in',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    }


  ])


  return (
    <div>
      <AuthProvider>
        <ModalProvider>
          <RouterProvider router={router}/>
        </ModalProvider>
      </AuthProvider>
    </div>
  )
}

export default App