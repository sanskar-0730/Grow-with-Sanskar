import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import RegistrationForm from './components/Registration'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: "/register",
      element: <><Navbar /><RegistrationForm /><Footer /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App