import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Register() {

  const ApiUrl = "http://localhost:2004"
  const [Username, setUsername] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const navigate = useNavigate()

  function Register() {
    axios.post(ApiUrl + "/register", {
      Username: Username,
      Email: Email,
      Password: Password
    }).then(res => {
      console.log(res)
    })
  }

  function RedirectToLog() {
    navigate('/login')
  }


  return (
    <div>
      <input type="text" placeholder='Username' onChange={e=>
        setUsername(e.target.value)
      }/>
      <input type="text" placeholder='Email' onChange={e=>
        setEmail(e.target.value)
      }/>
      <input type="password" placeholder='Password' onChange={e=>
        setPassword(e.target.value)
      }/>
      <button onClick={Register}>Register</button>
      <br></br>
      <br></br>
      <button onClick={RedirectToLog}>Login</button>
    </div>
  )
}

export default Register