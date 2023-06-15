import Card from '../Card/Card';
import style from './Cards.module.css';
import React from 'react';
const Cards=({characters, onClose})=>{
  return (
    <div className={style.Conteiner_Cards}>
      {characters.map((character)=>(
        <Card
          key={character.id}
          character={character}
          onClose={onClose}/>
      ))}
    </div>
  );
};
export default Cards;
