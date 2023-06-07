
// import style from './Card.module.css'
// Redux
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
import {addFav,removeFav} from '//src/redux/actions/actions.js'
// React
import { useState } from 'react';

const Card=(props)=>{
  // Estados
   let {characters,onClose,addFavorite,removeFavorite}=props
   let {name,status,species,gender,image,id}=characters
   const [isFav,setFav]=useState(false)

// Handles
  const handleFavorite=(character)=>{
    if (!isFav) {
      setFav(true)
      addFavorite(character)
      
    }else{
      removeFavorite(id)
      setFav(true)
    }
  }

  // Render Cardw
  return (
        <div>
                {
                  isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
                }
                <img src={image} alt={name}/>
                <ul>
                      <li>{name}</li>
                      <li>Estado: {status}</li>
                      <li>Especie: {species}</li>
                      <li>Genero: {gender}</li>
                </ul>
                <button onClick={()=>{onClose(characters.id)}}>Cerrar</button>
                <button><Link to={`/detail/${id}`}>Detalles</Link></button>  
        </div>
        );
}

const mapDispachToProps=(dispatch)=>{
  return{
    addFavorite:(character)=>dispatch(addFav(character)),
    removeFavorite:(id)=>dispatch(removeFav(id))
  }
}
const mapStateToProps=(state)=>{
  return{
    myFavorites:state.myFavorites
  }
}
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Card)


    