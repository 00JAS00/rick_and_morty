
const {Favorite}=require('../../DB_connection')

const postFav=(character)=>{
    const {name,status,species,gender,origin,image}=character
    const myFavorites=Favorite.create({
        name:name && name,
        status:status && status,
        species:species && species,
        gender:gender && gender,
        origin:origin && origin,
        image:image && image,
    });
    if(!myFavorites) throw new Error("no character was introduced");
    return myFavorites;
}
const deleteFav=(character)=>{
    const {id,del}=character;
    const myFavorites=Favorite.findByPk(id)
    if(!myFavorites) throw new Error("the character does not exist");
    myFavorites.deleted=del,
    myFavorites.save()
    
    return myFavorites;
}
module.exports={
    postFav,
    deleteFav,
}