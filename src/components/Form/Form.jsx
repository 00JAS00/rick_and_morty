import React, { useState } from "react";
import validate from "../validate";

const Form=({login})=>{
    
    // Estadoss

    const {userData,setUserData}=useState({
        email:"",
        password:"",
    });
    const {error,setError}=useState({
        email:"",
        password:"",
    })


    // Handles


    const handleChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        });
        setError(validate({
            ...userData,
            [e.target.name]:e.target.value,
        }));
    };
    function handleSubmit(e){
        e.preventDefault(userData)
        if(!errors.email&&!errors.password){
            login(userData);
        }
        else{
            alert("incorrect data")
        }

    }

    return(
        <div>
            <h1>login</h1>
            <form >
            <label htmlFor="email"></label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {error.email&& <span>{error.email}</span>}
            <label htmlFor="password"></label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {error.password&& <span>{error.password}</span>}
            <button>Submit</button>
        </form>
        </div>
        
    );
}

export default Form;