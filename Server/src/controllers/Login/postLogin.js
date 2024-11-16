import  User  from '../../models/UserModel'
const postLogin= async(email,password)=>{
    const user=await User.findOne({where:{email}})
    if (!user){
        password= await bcrypt.hash(password,10);
        user= await User.create({email,password})
    }else{
    }
}