const getCharById=require('../../controllers/Characters/getCharById')
const getAllCharacters=require('../../controllers/Characters/getAllCharacters')
const getCharByName=require('../../controllers/Characters/getCharByName')

const getAllCharactersHandler=async(req,res)=>{
    try {
        const characters= await getAllCharacters();
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({error:error.message})
    }   
}
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
const CharacterByNameHandler=async(req,res)=>{
    try {
        const {name}=req.query;
        const character= await getCharByName(name);
        res.status(200).json(character);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
module.exports={ getAllCharactersHandler, getCharByIdHandler, CharacterByNameHandler }
