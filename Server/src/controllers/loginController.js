const data=require('../utils/users')
const login=(req,res)=>{
    const {email,password}=req.query;
    const found=data.find(user=>user.email===email && user.password===password)
    const access=found? true:false;
    try{
        console.log(access)
        return res.status(200).json({access})
    }
    catch(error){
        res.status(404).json({error:errorMessage})
    };
}
module.exports=login;