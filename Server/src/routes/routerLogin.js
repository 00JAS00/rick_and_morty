const routerLogin=require('express').Router()
const {loginHandler,loginPostHandler}=require('../handlers/Login/loginHandler')

routerLogin.get("/login",loginHandler);
routerLogin.post("/login", loginPostHandler); 

module.exports=routerLogin