import styles from './App.module.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

// Rutas de Componentes
import Cards from './components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import Form from './components/Form/Form';
import Favorites from './views/Favorites/Favorites';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const EMAIL = 'julian.m.sosa.muchut@gmail.com';
  const PASSWORD = '123julian';

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({data}) => {
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        },
    );
  };
  const onClose = (id) => {
    const deleted = characters.filter(
        (character) => character.id !== Number(id),
    );

    setCharacters(deleted);
  };

  const randomHandler = () => {
    const haveIt = [];
    let random = (Math.random() * 826).toFixed();
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert('No hay personajes con ese ID');
            }
          });
    } else {
      return false;
    }
  };
  return (
    <div className={styles.app}>
      {location.pathname !== '/' && (
        <Nav onSearch={onSearch} randomHandler={randomHandler} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/About" element={<About />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
