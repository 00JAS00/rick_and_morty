import Card from '../Card/Card';
import style from './Cards.module.css';
import React from 'react';
const Cards=({characters, onClose})=>{
  return (
    <div className={style.Conteiner_Cards}>
      {characters.map((character)=>(
        <Card key={characters.id} characters={characters} onClose={onClose}/>
      ))}
    </div>
  );
};
export default Cards;
