const { User }=require('../../DB_connection')
const bcrypt = require('bcrypt');
const login= async (email,password)=>{

    const user=await User.findOne({where:{email}})
    if (!user) throw new Error("Invalid User");
    
    const hashedPassword=user.password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) throw new Error("Invalid Password");
    
    const access=user? true:false;
    return access
}
module.exports=login;