const router=require('express').Router()
const routerFavorite=require('./routerFavorite')
const routerCharacter=require('./routerCharacter')
const routerLogin=require('./routerLogin')


router.use("/favorites",routerFavorite);
router.use("/characters",routerCharacter);
router.use("/login",routerLogin);


module.exports=router
