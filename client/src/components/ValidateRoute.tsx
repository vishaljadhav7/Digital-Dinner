import { useAppSelector } from "../redux/hooks"
import Profile from "../pages/Profile"

const ValidateRoute = ({children} : {children : React.ReactNode}) => {
  const authStatus = useAppSelector(store => store.user.isAuthenticated)
  return (
    <>
    {authStatus ?   <Profile/> : children }
    </>
  )
}

export default ValidateRoute;