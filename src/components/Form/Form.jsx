import React, { useState } from "react";
import validate from "../validate";

const Form=({login})=>{
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const [errors, setErrors] = useState({
        email: " ",
        password: " ",
      });
    
      function handleChange(event) {
        event.preventDefault();
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
        setErrors(
          validate({
            ...user,
            [event.target.name]: event.target.value,
          })
        );
      }
    
    function handleSubmit(e) {
        e.preventDefault();
    
        if (!errors.email && !errors.password) {
        login(user);
        } else {
        alert("Datos incorrectos");
        }
    }

    return(
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            {errors.email ? <span>{errors.email}</span> : null}
            <label htmlFor="password"></label>
            <input type="password" name="password" value={user.password} onChange={handleChange}/>
            {errors.password ? <span>{errors.password}</span> : null}
            <button>Submit</button>
        </form>
        </div>
        
    );
}

export default Form;