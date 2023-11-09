import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {removeFav} from './redux/actions/actions';
import styles from './styles/App.scss';
// Rutas de Componentes
import Cards from './components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import Form from './components/Form/Form';
import Favorites from './views/Favorites/Favorites';

const App = () => {
  // States
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const dispatch=useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // Functions

  const login=(userData)=>{
    const {email, password} = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`).then(({data}) => {
      const {access} = data;
      setAccess(data);
      access && navigate('/home');
    });
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({data}) => {
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        },
    );
  };

  // Handlers

  const onClose = (id) => {
    const deleted = characters.filter(
        (character) => character.id !== Number(id),
    );
    setCharacters(deleted);
    dispatch(removeFav(id));
  };

  const randomHandler = () => {
    const haveIt = [];
    let random = (Math.random() * 826).toFixed();
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`http://localhost:3001/rickandmorty/character/${random}`)
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

        <Route path="/About" element={<About />}/>
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
