const login = require('../controllers/login');
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



module.exports=loginHandler
