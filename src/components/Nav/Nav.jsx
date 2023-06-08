import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import React from 'react';

const Nav = ({onSearch}) => {
  return (
    <nav>
      <button>
        <Link to='/About'>About</Link>
      </button>
      <button>
        <Link to='/home'>Home</Link>
      </button>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};
export default Nav;
