import React, { useState } from "react";

const Form=()=>{
    const {userData,setUserData}=useState({
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        });
    };

    return(
        <div>
            <h1>login</h1>
            <form >
            <label htmlFor="email"></label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            <label htmlFor="password"></label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
        
    );
}

export default Form;