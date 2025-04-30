import {Main} from '../src/pages/Main'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Menu from './pages/Menu'
import MenuPage from './pages/MenuPage'

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
          element : <></>
        }
      ]
    }
  ])

  return (
    <>
      <div className=''>
      <RouterProvider router={appRouter}/>

      </div>
    </>
  )
}

export default App
