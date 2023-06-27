let myFavorites=[]

const postFav=(character)=>{
    myFavorites.push(character)
    if(!myFavorites) throw new Error("no character was introduced");
    return myFavorites;
}
const deleteFav=(id)=>{
    const delFav=myFavorites.findIndex(fav=>fav.id===id);
    if(!delFav) throw new Error("the character does not exist");
    myFavorites.splice(delFav,1)
    return myFavorites;
}
module.exports={
    postFav,
    deleteFav,
}