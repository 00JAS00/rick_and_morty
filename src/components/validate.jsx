import React from "react";
function validate(user) {
    let errors = {};

    if (!user.email) {
    errors.email = "Enter tour email";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    errors.email = "Invalid email";
    }
    if (user.email.length >= 35) {
    errors.email = "Invalid email";
    }
    if (!/\d/.test(user.password)) {
    errors.password = "Password must contain a number";
    }
    if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
    }
    if (!user.password) {
    errors.password = "Enter a password";
    }

    return errors;
}
export default validate;