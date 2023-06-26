const axios=require('axios')
const URL='https://rickandmortyapi.com/api/character/';
const getCharById=(req,res)=>{
    const {id}=req.params
    axios(URL+id)
    .then((response)=> response.data)
    .then(({id,gender,species,origin,image,status})=>{
        const character={
            id,
            gender,
            species,
            origin,
            image,
            status
        }
        return character.name? res.status(200).json(character): res.status(404).send("Not funcaaaaaaaaaa");
    })
    .catch((error)=>{
        res.status(500).json({message: error.message+'puto'})
    })

}

module.exports={getCharById}
