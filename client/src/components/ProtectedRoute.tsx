import { useAppSelector } from "../redux/hooks"
import HeroSection from "./HeroSection"

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {
  const authStatus = useAppSelector(store => store.user.isAuthenticated)
  return (
    <>
    {authStatus ?  children : <HeroSection/>}
    </>
  )
}

export default ProtectedRoute