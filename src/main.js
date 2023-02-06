import React, { useState } from "react";
import "./hooks.css"


const Loginform = ()=>{
    const [popupStyle,showPopup]=useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        <center>
        <div className="cover">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" onClick={popup}>LOGIN</div>
            <center><p className="text">OR LOGIN USING</p></center>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="goggle"></div>
            </div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>username or password incorrect</p>
            </div>
        </div>
        </center>
    )
}

export default Loginform;