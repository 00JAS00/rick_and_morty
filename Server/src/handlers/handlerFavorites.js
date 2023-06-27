const {postFav,deleteFav}=require('../controllers/postAndDeleteFav')



const handlerPostFav=(req,res)=>{
    try {
        const character=req.body;
        const myFavorites=postFav(character);
        res.status(200).json(myFavorites).send(myFavorites)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
    
}
const handlerDeleteFav=(req,res)=>{
    try {
        const {id}=req.params;
        myFavorites=deleteFav(id);
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
    
}

module.exports={
    handlerPostFav,
    handlerDeleteFav,
}