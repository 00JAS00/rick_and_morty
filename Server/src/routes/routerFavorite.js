const routerFavorite=require('express').Router()
const {handlerGetFav, handlerGetFavById, handlerPostFav,handlerDeleteFav}=require('../handlers/Favorites/handlerFavorites')

// routerFavorite.get("/",handlerGetFav); 
// routerFavorite.get("/:id",handlerGetFavById);     
routerFavorite.post("/",handlerPostFav);
// routerFavorite.put("/:id",handlerPutFav);

module.exports=routerFavorite