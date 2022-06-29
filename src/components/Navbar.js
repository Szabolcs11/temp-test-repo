import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Style from './../styles/Navbar.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies, Cookies } from 'react-cookie'
import Logo from './../images/logo.svg'

function Navbar() {

    const ApiUrl = "http://localhost:2004"
    const [Username, setUsername] = useState('Loading...')
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


    useEffect(() => {
        // console.log("Home")
        let cookie = cookies.SessionToken
        if (cookie) {
        axios.post(ApiUrl + "/getHome" , {
            Token: cookie
        }).then(res => {
            // console.log(res.data)
            setUsername(res.data.accountdatas.Username)
        })
        }
        else {
        navigate('/login')
        }
    }, [])

  return (
    // <div className='navbar'>
    //     <Link to="/">
    //         Naavbar
    //     </Link>
    //     <ul>
    //     <li>
    //         <CustomLink to="/profile">Profile</CustomLink>
    //     </li>
    //     <li>
    //         <CustomLink to="/test">Test</CustomLink>
    //     </li>
    //     <li>
    //         <CustomLink to="/">Home</CustomLink>
    //     </li>
    //     </ul>
    //     <p>{Username}</p>
    // </div>     
    <>
    <header>
            {/* <a className="logo"><CustomLink  to="/"><img src={Logo} alt="logo" /></CustomLink></a> */}
            <CustomLink  className="logo" to="/"><img src={Logo} alt="logo" /></CustomLink>
            <nav>
                <ul className="nav__links">
                    <li><CustomLink to="/addreport">Add Report</CustomLink></li>
                    <li><CustomLink to="/myreports">My Reports</CustomLink></li>
                    <li><CustomLink to="/profile">Profile</CustomLink></li>
                </ul>
            </nav>
            <a className="cta">{Username}</a>      
        </header>
    </>
  )
}



function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <>
            <Link to={to} {...props}>
                {children}
            </Link>
        </>
    )
}

export default Navbar