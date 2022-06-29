import React from 'react'
import uuid from 'react-uuid'

function Report(props) {
    
    const ApiUrl = "http://localhost:2004"


    function ShowImage(url) {
        document.getElementById('modal').classList.remove('mvanish')
        document.getElementById('ModalPic').setAttribute('src', ApiUrl + "/Images/" + url);
        console.log(url)
    }

    
  return (
    <li key={uuid()} className="table-row">
    <div className="col col-1" data-label="Job Id">{props.id}</div>
    <div className="col col-2" data-label="Customer Name">{props.Name}</div>
    <div className="col col-3" data-label="Amount">{"$" + props.Price}</div>
    <div className="col col-4" data-label="Payment Status">{props.Other}</div>
    <div className="col col-5 cursport-pointer" data-label="Payment Status" onClick={ () => ShowImage(props.ImageUrl)}>Image</div>
  </li>
    // <div>Report {props.a} </div>
  )
}

export default Report