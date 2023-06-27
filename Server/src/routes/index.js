const router=require('express').Router()
const getCharByIdHandler= require('../handlers/getCharByIdHandler')
const loginHandler=require('../handlers/loginHandler')
const {handlerPostFav,handlerDeleteFav}=require('../handlers/handlerFavorites')

router.get("/character/:id",getCharByIdHandler);
router.get("/login",loginHandler);
router.post("/fav",handlerPostFav);
router.delete("/fav/:id",handlerDeleteFav);
module.exports={router}
