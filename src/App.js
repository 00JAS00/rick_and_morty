import styles from'./App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav';
import { useState } from 'react';
import  axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   function onClose(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));

      setCharacters(deleted);
   } 
   return (
      <div className={styles.app}>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
