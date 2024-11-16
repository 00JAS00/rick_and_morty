const  getAllCharacters = require('./getAllCharacters')

const getCharByName=async(name)=>{
    const characters= await getAllCharacters();
    //! para hacer por nombre hay que iterar sobre cada pagina de la api
    //! para obtener el personaje deseado va de 20 items a 20 items

    // Filtrar los personajes cuyos nombres contengan las letras especificadas
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredCharacters;
    
}

module.exports = getCharByName