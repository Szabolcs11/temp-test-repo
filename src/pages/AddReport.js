import  axios from 'axios';
import React, { useState } from 'react'
import Style from './../styles/AddReport.css'
import { useCookies, Cookies } from 'react-cookie'

function AddReport() {

    const [Name, SetName] = useState();
    const [Price, SetPrice] = useState();
    const [Other, SetOther] = useState("");
    const [image, setimage] = useState(null);

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


    const getFileInfo = (e) => {
        // const formData = new FormData(); 
        // formData.append('image', e.target.files[0], e.target.files[0].name);
        // formData.append('name', "asd")
        // setimage(formData);
        setimage(e.target.files[0]);
    }

    function Submit() {
        let cookie = cookies.SessionToken
        const datas = new FormData();
        datas.append('image', image)
        datas.append('Name', Name)
        datas.append('Price', Price)
        datas.append('Other', Other)
        datas.append('Token', cookie)
        axios.post('http://localhost:2004/submitreport', datas).then (res => {
            console.log(res.data)
        })
    }
    
    return (
        <div className="bg">
            <div className="container">
                <p>Add report</p>
                <div className="inputs">
                    <input type="text" placeholder='Name' onChange={e => {
                        SetName(e.target.value)
                    }}/>
                    <input type="text" placeholder='Price' onChange={e => {
                        SetPrice(e.target.value)
                    }}/>
                    <input type="text" placeholder='Other' onChange={e => {
                        SetOther(e.target.value)
                    }}/>
                    <input type="file" onChange={getFileInfo}/>
                </div>
                <button onClick={Submit}>Submit</button>
            </div>
        </div>
    )
}

export default AddReport