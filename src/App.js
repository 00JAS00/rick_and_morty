import styles from "./App.module.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";

// Rutas de Componentes

import Cards from "./components/Cards/Cards.jsx";
import Nav from "../src/components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const logInRoute = location.pathname !== "/";
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "unaPassword";
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onClose(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    setCharacters(deleted);
  }
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };
  return (
    <div className={styles.app}>
      {logInRoute && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
