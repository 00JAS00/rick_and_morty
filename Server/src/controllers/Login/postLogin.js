import  User  from '../../models/UserModel'
const postLogin= async(email,password)=>{
    const user=await User.findOne({where:{email}})
}