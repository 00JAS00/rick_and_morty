const getCharById=require('../controllers/getCharById')

const getCharByIdHandler=async(req,res)=>{
    try {
        const {id}=req.params
        const character= await getCharById(id);
        console.log(character)
        res.status(200).json(character);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
module.exports=getCharByIdHandler
