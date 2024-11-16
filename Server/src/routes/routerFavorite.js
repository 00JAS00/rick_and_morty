const routerFavorite=require('express').Router()
const { Router } = require('express');
const {handlerGetFav, handlerGetFavById, handlerPostFav,handlerDeleteFav,handlerUpdateFav}=require('../handlers/Favorites/handlerFavorites')

routerFavorite.get("/",handlerGetFav); 
routerFavorite.get("/:id",handlerGetFavById);    
routerFavorite.post("/",handlerPostFav);
routerFavorite.put("/delete/:id",handlerDeleteFav);
routerFavorite.put("/update/:id",handlerUpdateFav);


module.exports=routerFavorite