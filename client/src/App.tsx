import {Main} from '../src/pages/Main'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Menu from './pages/Menu'
import MenuPage from './pages/MenuPage'
import { Provider } from 'react-redux'
import {store} from './redux/appStore'
import Cart from './pages/Cart'
import { Toaster } from 'sonner'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute';
import ValidateRoute from './components/ValidateRoute';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Main/>,
      children : [
        {
          path : "/",
          element : <ValidateRoute><HeroSection/></ValidateRoute> 
        },
        {
          path : "/menu",
          element : <Menu/>
        },
        {
          path : "/menu/:itemId",
          element : <MenuPage/>
        },
        {
          path : "/cart",
          element : <Cart/>
        },
        {
          path : "/profile",
          element :  <ProtectedRoute><Profile/></ProtectedRoute>
        },
        {
          path : "/signup",
          element : <ValidateRoute><SignUp/></ValidateRoute>
        },
        {
          path : "/signin",
          element :  <ValidateRoute> <SignIn/> </ValidateRoute>
        }
      ],
    },

  ])

  return (
    <>
      <div className=''>

      <Provider store={store}>   
       <RouterProvider router={appRouter}/>
       <Toaster/>
      </Provider>  
      </div>
    </>
  )
}

export default App
