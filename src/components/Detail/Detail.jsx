/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({data}) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        },
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div>
        <h1>{character.name}</h1>
        <ul>
          <li>{character.status}</li>
          <li>{character.gender}</li>
          <li>{character.species}</li>
        </ul>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};
export default Detail;
