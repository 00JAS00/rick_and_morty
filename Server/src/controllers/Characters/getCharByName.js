const getAllCharacters=require('../controllers/Characters/getAllCharacters')

const getCharByName=async(name)=>{
    const characters= await getAllCharacters();

    // Filtrar los personajes cuyos nombres contengan las letras especificadas
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredCharacters;
    
}

modules.exports=getCharByName