import style from './SearchBar.module.css';
import React, {useState} from 'react';


const SearchBar=({onSearch})=>{
  const [id, setId]=useState('');

  const handleChange=(event)=>{
    event.preventDefault();
    setId(event.target.value);
  };

  return (
    <div className={style.addNav}>
      <input type='search' onChange={handleChange} value={id}/>
      <button onClick={() => {
        onSearch(id); setId('');
      }}>Agregar</button>
    </div>
  );
};
export default SearchBar;
