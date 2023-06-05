import React from "react";
const validate=(user)=>{
    let errors={}
    if (!user.email) {
        errors.email="Enter your email";
    }
    if (user.email.length>=35){
        errors.email="Invalid Email";
    }

    // valitade password
    if (user.password.length<6||user.password.length>10){
        errors.password="Password must be between 6 and 10 characters";
    }
    return errors;

}
export default validate;