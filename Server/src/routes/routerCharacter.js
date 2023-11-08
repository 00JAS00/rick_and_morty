const routerCharacter=require('express').Router()   
const { getCharByIdHandler, getAllCharactersHandler }= require('../handlers/Characters/getCharacterHandler')

routerCharacter.get("/",getAllCharactersHandler);
routerCharacter.get("/:id",getCharByIdHandler);

module.exports=routerCharacter;