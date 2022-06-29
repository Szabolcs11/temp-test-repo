import React, { useState, useEffect } from 'react'
import { useCookies, Cookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import Style from "./../styles/MyReports.css"
import Report from '../components/Report'

function MyReports() {

  const ApiUrl = "http://localhost:2004"
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const [reports, SetReports] = useState([{}])

  useEffect(() => {
    let cookie = cookies.SessionToken
    if (cookie) {
    axios.post(ApiUrl + "/getMyReports" , {
        Token: cookie
    }).then(res => {
        console.log(res.data.datas)
        SetReports(res.data.datas)
    })
    }
    else {
    navigate('/login')
    }
  }, [])

  // const allreport = reports.map((r) => <p key={uuid()}>{r.Name}</p>);


  function CloseModal() {
    document.getElementById('modal').classList.add('mvanish')
  }

  const allreport = reports.map((r) => 
    <Report id={r.id} Name={r.Name} Price={r.Price} Other={r.Other} ImageUrl={r.ImageUrl}/>
  );


  return (
    <div>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></link>
      <div className="reportscontainer">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2">Name</div>
            <div className="col col-3">Price</div>
            <div className="col col-4">Other</div>
            <div className="col col-5">Image</div>
          </li>
          {allreport}
        </ul>
      </div>

        <div id="modal" className="ModalBg mvanish">
          <i id="ModalClosed" className="fas fa-times" onClick={CloseModal}></i>
          <div className="Modal">
              <img id="ModalPic" src="" alt="Img"/>
          </div>
        </div>

    </div>
  )
}

export default MyReports