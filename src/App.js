import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import './hooks.css';

function App() {
  const [values, setValues]= useState({
    firstName:"",
    lastName:"",
    email:"",
  });

  const[submitted, setSubmitted]=useState(false);
  const[valid,setvalid]=useState(false);

  const handleFirstNameInputChange=(event)=>{
    setValues({...values,firstName:event.target.value})
  }

  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName:event.target.value})
  }

  const handleEmailInputChange=(event)=>{
    setValues({...values,email:event.target.value})
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setvalid(true);
    }
    setSubmitted(true);
  }

  return (
    <center>
    <div className="form-container">
    {/* <div className="alt-login">
    <div className="facebook"></div>
</div> */}

{/* <div>
      <img src="https://th.bing.com/th/id/OIP.ggmZ0RTsVNDvEtFP4mlGawAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.2" alt="My Image"/>
    </div> */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', fontFamily: 'Monospacef', fontSize: 32, fontWeight: 'bold', }}>
    <p className="text1">React Hooks Form</p></div>
    <p className="text2">Performant,flexible and extensible forms with easy-to-use validation.</p>
      <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ?<div className="success-message">success! Thank you for registering</div>: null}

      <center><input type="text"
        onChange={handleFirstNameInputChange}
        value={values.firstName}
        className="form-field"
        placeholder="First Name"
        name="firstName"/>
        <p className="write">{submitted && !values.firstName ?<span>Please enter a first name</span>: null}</p></center>

        <center> <input type="text"
         onChange={handleLastNameInputChange}
         value={values.lastName}
         className="form-field"
         placeholder="Last Name"
         name="lastName"/>
       <p className="write">{submitted && !values.lastName ?<span>Please enter a last name</span>: null}</p></center>

       <center><input type="text"
      onChange={handleEmailInputChange}
      value={values.email}  
     className="form-field"
         placeholder="Email"
         name="email"/>
         <p className="write">{submitted && !values.email ? <span>Please enter a Email</span>: null}</p></center>

         <center><button
         className="login-btn"
         type="submit">SUBMIT</button></center>
      </form>
     
    </div>
    </center>
  );
}

export default App;
