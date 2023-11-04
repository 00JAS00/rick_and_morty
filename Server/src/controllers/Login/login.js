const userModel=require('../../DB_connection')
const login=(email,password)=>{
    
    const found=data.find(user=>user.email===email && user.password===password)
    const access=found? true:false;
    if(!access)throw new Error("Invalid Password");
    return access
}
module.exports=login;