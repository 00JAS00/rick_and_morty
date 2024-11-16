const {postFav,deleteFav,getAllFav,getFavById,updateFav}=require('../../controllers/Favorites/favoriteController')



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
const handlerUpdateFav=(req,res)=>{
    try {
        const {id}=req.params;
        const character=req.body;
        myFavorites=updateFav(id,character);
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
const handlerGetFav= (req,res)=>{
    try {
        const myFavorites=getAllFav();
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
const handlerGetFavById= (req,res)=>{
    try {
        const {id}=req.params;
        const myFavorite=getFavById(id);
        res.status(200).json(myFavorite)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports={
    handlerGetFav,
    handlerGetFavById,
    handlerPostFav,
    handlerDeleteFav,
    handlerUpdateFav
}