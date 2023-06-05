import Card from '../Card/Card';
import style from './Cards.module.css'
export default function Cards({characters,onClose}) {

return (
   <div className={style.Conteiner_Cards}>
      {characters.map((character)=>(<Card key={characters.id} characters={character} onClose={onClose}/>))}
   </div>
   );
}


