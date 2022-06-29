import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NavbarLayout from './NavbarLayout'
import NavbarLayout from './components/NavbarLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Test from './pages/Test'
import MyReports from './pages/MyReports'
import AddReport from './pages/AddReport'

function App() {
  // Már itt lehetne szűrni, hogy van-e süti, és jó-e, SZERINTEM
  console.log("App")
  return (
    <>
      <Routes>
          <Route element={<NavbarLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/myreports' element={<MyReports />}></Route>
            <Route path='/addreport' element={<AddReport />}></Route>
          </Route>
          
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
      </Routes>

    </>
  )
}


export default App