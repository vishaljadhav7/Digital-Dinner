import {Main} from '../src/pages/Main'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Menu from './pages/Menu'
import MenuPage from './pages/MenuPage'
import { Provider } from 'react-redux'
import {store} from './redux/appStore'
import Cart from './pages/Cart'

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Main/>,
      children : [
        {
          path : "/",
          element : <HeroSection/>
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
        }
      ]
    }
  ])

  return (
    <>
      <div className=''>

      <Provider store={store}>   
       <RouterProvider router={appRouter}/>
      </Provider>  
      </div>
    </>
  )
}

export default App
