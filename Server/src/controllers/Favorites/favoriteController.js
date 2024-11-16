
const {Favorite}=require('../../DB_connection')

// Traer favoritos
const getAllFav=async()=>{
    const myFavorites=await Favorite.findAll();

    if(!myFavorites) throw new Error("dont exist favorites characters");
    
    return myFavorites
}

// Buscar favoritos
const getFavById=async(id)=>{
    if(!id || id.length===0) throw new Error("the id is required");
    
    const myFavorites=await Favorite.findByPk(id);

    if(!myFavorites) throw new Error("dont exist this character in favorites");

    return myFavorites
}
// Crear favoritos
const postFav=async(character)=>{
    const {name,status,species,gender,origin,image}=character
    const myFavorites=await Favorite.create({
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
// Eliminar favoritos
const deleteFav=async(character)=>{
    const {id}=character;
    const myFavorite= await Favorite.findByPk(id)
    if(!myFavorite) throw new Error("the character does not exist");
    myFavorite.deleted=!myFavorite.deleted,
    myFavorite.save()
    
    return myFavorite;
}
// Actualizar favoritos
const updateFav=async(id,character)=>{
    const {name,status,species,gender,origin,image}=character
    if(!id || id.length===0) throw new Error("the id is required");
    if( !name && !status && !species && !gender && !origin && !image) throw new Error("at least one parameter is required");
    const myFavorite= await Favorite.findByPk(id)
    
    if(!myFavorite) throw new Error("the character does not exist");
    
    // update character
    myFavorite={
        name:name && name,
        status:status && status,
        species:species && species,
        gender:gender && gender,
        origin:origin && origin,
        image:image && image,
    }
    await myFavorite.save()
    
    return myFavorite;
}

module.exports={
    postFav,
    deleteFav,
    getAllFav,
    getFavById,
    updateFav
}