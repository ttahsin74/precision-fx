// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "./pages/Home"
import Navbar from './components/Navbar'
import AccountManagement from "./pages/AccountManagement"
import CopyTrading from "./pages/CopyTrading"
import About from "./pages/About"

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <AccountManagement/>
    <CopyTrading/>
    <About/>
    </>
  )
}

export default App
