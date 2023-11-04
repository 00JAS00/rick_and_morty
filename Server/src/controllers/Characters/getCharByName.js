const getAllCharacters=require('../controllers/Characters/getAllCharacters')

const getCharByName=async(name)=>{
    const characters= await getAllCharacters();
    
}