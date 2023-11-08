const axios = require('axios');

const URL='https://rickandmortyapi.com/api/character';
const getAllCharacters= async()=>{
    try {
        const characters= await axios.get(`${URL}`);
        return characters.data.results;
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports=getAllCharacters;