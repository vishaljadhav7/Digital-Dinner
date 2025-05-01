import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { removeUser } from "../features/user"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const authStatus = useAppSelector(store => store.user.isAuthenticated)
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

   const handleSignOut =  async () => {
     try {
       await axios.post(`${import.meta.env.VITE_PUBLIC_API}/sign-out`, {}, {
        withCredentials : true
       });
       dispatch(removeUser());
       navigate("/")
     } catch (error) {
      console.error("Error ", error);
     }    
   }

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


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

      <div className="hidden md:flex items-center md:gap-4">
        {authStatus ? 
           (<>
           <button 
            onClick={handleSignOut}
           className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
             Log Out
           </button>
           </>)
          :
         <>
       <Link to={"/signin"}> 
         <button className=" text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
           Log In
         </button>
        </Link>
        <Link to={"/signup"}>
         <button className=" px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
           Sign Up
         </button>
        </Link> 
         </>
         }
      </div>

      
      <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-orange-500">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6 " />
              )}
            </button>
          </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm absolute w-full top-16 left-0 z-[100]">
          <nav className="flex flex-col items-center gap-4 py-4">
            {!authStatus && (
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              to={"/menu"}
              onClick={toggleMenu}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Menu
            </Link>
            <Link
              to={"/cart"}
              onClick={toggleMenu}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Cart
            </Link>
            {authStatus && (
              <Link
                to={"/profile"}
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                Profile
              </Link>
            )}
            {authStatus ? (
             <button
             onClick={() => {
              handleSignOut();
              toggleMenu()
             }} 
              
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Log Out
            </button>
            ) : (
              <>
                <Link to={"/signin"} onClick={toggleMenu}>
                  <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                    Log In
                  </button>
                </Link>
                <Link to={"/signup"} onClick={toggleMenu}>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  </header>

  )
}

export default Header