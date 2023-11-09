import React, {useState} from 'react';

const SearchBar = ({onSearch, randomHandler}) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  return (
    <div className={style.addNav}>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId('');
        }}
      >
        Agregar
      </button>
      <button onClick={() => randomHandler()}>Random</button>
    </div>
  );
};
export default SearchBar;
