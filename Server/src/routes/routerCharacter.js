const { Router } = require('express');
const routerCharacter=Router()
const { getCharByIdHandler, getAllCharactersHandler, CharacterByNameHandler }= require('../handlers/Characters/getCharacterHandler')

routerCharacter.get("/",getAllCharactersHandler);
routerCharacter.get("/name?",CharacterByNameHandler);
routerCharacter.get("/:id",getCharByIdHandler);

module.exports=routerCharacter;