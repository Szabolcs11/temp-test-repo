import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies, Cookies } from 'react-cookie'

function Home() {
  const ApiUrl = "http://localhost:2004"
  const [Username, setUsername] = useState()
  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


  // useEffect(() => {
  //   console.log("Home")
  //   let cookie = cookies.SessionToken
  //   if (cookie) {
  //     axios.post(ApiUrl + "/getHome" , {
  //       Token: cookie
  //     }).then(res => {
  //       // console.log(res.data)
  //       setUsername(res.data.accountdatas.Username)
  //     })
  //   }
  //   else {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <>
      <div>Home</div>
      <p>{Username}</p>
    </>
  )
}

export default Home