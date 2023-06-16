const axios=require('axios')
const getCharById=(res,id)=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
        (response)=> response.data,
    )
    .then(({id,gender,species,origin,image,status})=>{
        const character={
            id,
            gender,
            species,
            origin,
            image,
            status
        }
        return res
                    .writeHead(200,{"Content-type":"application/json"})
                    .end(JSON.stringify(character))
    })

.catch((error)=>{
    return res.writeHead(500,{"Content-type":"text/plain"})
            .end(error.message+" falla en controllers")
})

}

module.exports={getCharById}
