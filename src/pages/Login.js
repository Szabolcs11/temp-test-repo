import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies, Cookies } from 'react-cookie'

function Login() {

  const ApiUrl = "http://localhost:2004"
  const [Username, setUsername] = useState()
  const [Password, setPassword] = useState()
  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


  useEffect(() => {
    let cookie = cookies.SessionToken
    if (cookie) {
      navigate('/')
    }
  }, [])

  function Login() {
    axios.post(ApiUrl + "/login" , {
      Username: Username,
      Password: Password
    }).then(res => {
      console.log(res.data)
      var date = new Date(res.data.expires);
      setCookie('SessionToken', res.data.token, {expires: date})
      navigate('/')
    })
  }

  function RedirectToReg() {
    navigate('/register')
  }
  

  return (
    <>
      <div>
        <input type="text" placeholder='Username' onChange={e =>
          setUsername(e.target.value)
        }/>
        <input type="password" placeholder='Password' onChange={e =>
          setPassword(e.target.value)
        }/>
        <button onClick={Login}>Login</button>
        <br></br>
        <br></br>
        <button onClick={RedirectToReg}>Register</button>
      </div>
    </>
  )
}

export default Login