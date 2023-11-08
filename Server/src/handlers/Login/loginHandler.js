const login = require('../../controllers/Login/login');
const loginHandler=(req,res)=>{
    try{
        const {email,password}=req.query;
        const access=login(email,password);
        return res.status(200).json({access})
    }
    catch(error){
        res.status(404).json({error:error.message})
    };
}
const loginPostHandler=(req,res)=>{
    try{
        const {email,password}=req.body;
        const access=login(email,password);
        return res.status(200).json({access})
    }
    catch(error){
        res.status(404).json({error:error.message})
    };
}


module.exports={loginHandler, loginPostHandler}
