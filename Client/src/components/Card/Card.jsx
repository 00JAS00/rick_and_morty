
import style from './Card.module.css';
// Redux
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addFav, removeFav} from '../../redux/actions/actions';
// React
import {useState, useEffect} from 'react';

const Card=({character, onClose, addFavorite, removeFavorite, myFavorites})=>{
  // Estados

  const {name, status, species, gender, image, id}=character;
  const [isFav, setFav]=useState(false);
  const [closeBtn, setCloseBtn]=useState(true);

  // useEffect remember favorite

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites]);
  useEffect(()=>{
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  // Handles

  const handleFavorite=()=>{
    if (!isFav) {
      setFav(true);
      addFavorite({name, status, species, gender, image, id});
    } else {
      removeFavorite(id);
      setFav(false);
    }
  };


  // Render Card
  return (
    <div>
      <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
      <img src={image} alt={name}/>
      <ul>
        <li>{name}</li>
        <li>Estado: {status}</li>
        <li>Especie: {species}</li>
        <li>Genero: {gender}</li>
      </ul>
      {closeBtn&&
        <button
          onClick={()=>{
            onClose(id);
          }}>Cerrar</button>
      }
      <button><Link to={`/detail/${id}`}>Detalles</Link></button>
    </div>
  );
};

const mapDispachToProps=(dispatch)=>{
  return {
    addFavorite: (characters)=>dispatch(addFav(characters)),
    removeFavorite: (id)=>dispatch(removeFav(id)),
  };
};
const mapStateToProps=(state)=>{
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(
    mapStateToProps,
    mapDispachToProps,
)(Card);

