import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import React from 'react';

const Nav = ({onSearch, randomHandler}) => {
  return (
    <nav>
      <button>
        <Link to='/About'>About</Link>
      </button>
      <button>
        <Link to='/home'>Home</Link>
      </button>
      <button><Link to='/favorites'>Favorites</Link></button>
      <SearchBar onSearch={onSearch} randomHandler={randomHandler}/>
    </nav>
  );
};
export default Nav;
