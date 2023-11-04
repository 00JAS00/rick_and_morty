const routerCharacter=require('express').Router()   
const getCharByIdHandler= require('../handlers/Characters/getCharacterHandler')

routerCharacter.get("/character",getAllCharactersHandler);
routerCharacter.get("/character/:id",getCharByIdHandler);

module.exports=routerCharacter;