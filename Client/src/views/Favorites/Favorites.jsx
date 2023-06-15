import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../../components/Card/Card';

const Favorites=()=>{
  const favorites=useSelector((state)=>state.myFavorites);
  return (
    <>
      {favorites.map((character) =>
        (<Card key={character.id} character={character} />
        ))}
    </>
  );
};

export default Favorites;
