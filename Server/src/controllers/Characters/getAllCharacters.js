const axios = require('axios');

const URL='https://rickandmortyapi.com/api/character';
const getAllCharacters= async()=>{
        const characters= await axios.get(`${URL}`);
        return characters.data;
}

module.exports= getAllCharacters;