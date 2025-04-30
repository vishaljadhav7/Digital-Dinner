import Header from "../components/Header"
import { Outlet } from "react-router-dom"


export const Main = () => {

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
    <Header/>
    <Outlet/>
  </div>
  )
}
