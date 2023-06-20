import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card/Card';
// eslint-disable-next-line max-len
import {orderCards, filterCards, resetFilter} from '../../redux/actions/actions';
import {useState} from 'react';

const Favorites=()=>{
  const [aux, setAux]=useState(false);
  const favorites=useSelector((state)=>state.myFavorites);
  const dispatch=useDispatch();
  const handleOrder=(event)=>{
    dispatch(orderCards(event.target.value));
  };
  const handleFilter=(evenet)=>{
    dispatch(filterCards(event.target.value));
  };
  const handleReset=()=>{
    dispatch(resetFilter());
  };
  return (
    <>
      <div>
        <select placeholder='Gender' onChange={handleFilter}>
          {['Male', 'Female', 'unknown', 'Genderless'].map((gender, id=1)=>(
            <option key={id+=1}value={gender}>{gender}</option>
          ))}
        </select>
        <select placeholder='Order' onChange={handleOrder}>
          {['Ascending', 'Descending'].map((gender, id=1)=>(
            <option key={id+=1} value={gender}>{gender}</option>
          ))}
        </select>
        <button onClick={handleReset}>Reset Filter</button>
      </div>

      <div>
        {favorites.map((character) =>
          (<Card key={character.id} character={character} />
          ))}
      </div>

    </>
  );
};

export default Favorites;
