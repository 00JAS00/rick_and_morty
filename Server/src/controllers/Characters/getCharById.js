const axios=require('axios')
const URL='https://rickandmortyapi.com/api/character';
const getCharById= async(id)=>{
        const response = await axios.get(`${URL}/${id}`);
        const data = response.data;
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        };
        if (!character.name) throw new Error('character does not exist');
        return character;
}

module.exports=getCharById
