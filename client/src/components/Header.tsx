import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const Header = () => {
  const authStatus = useAppSelector(store => store.user.isAuthenticated)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
    <div className="container mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-orange-500">Digital Dinner</span>
      </div>
      <nav className="hidden md:flex gap-8">
        {!authStatus && <Link to={"/"} className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
          Home
        </Link>}
        <Link to={"/menu"} className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
          Menu
        </Link>
        <Link to={"/cart"} className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
          Cart
        </Link>
        { authStatus && 
        <Link to={"/profile"} className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
          Profile
        </Link>}
      </nav>
      <div className="flex items-center gap-4">
        {authStatus ? 
           (<>
           <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
             Log Out
           </button>
           </>)
          :
         <>
       <Link to={"/signin"}> 
         <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
           Log In
         </button>
        </Link>
        <Link to={"/signup"}>
         <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
           Sign Up
         </button>
        </Link> 
         </>
         }
      </div>
    </div>
  </header>

  )
}

export default Header