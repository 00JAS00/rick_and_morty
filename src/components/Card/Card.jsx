/* eslint-disable no-template-curly-in-string */
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   let {characters,onClose}=props
   let {name,status,species,gender,image,id}=characters
      return (
         <div className={style.flip_card_container}>
  <div className={style.flip_card}>

      <div className={style.card_front}>
        <figure>
          <div className={style.img_bg}></div>
          <img src={image} alt={name}/>
          <figcaption>{name}</figcaption>
        </figure>

        <ul>
              <li>Estado: {status}</li>
              <li>Especie: {species}</li>
              <li>Genero: {gender}</li>
        </ul>
      </div>

      <div className={style.card_back}>
        <figure>
          <div className={style.img_bg}></div>
          <img src="https://w0.peakpx.com/wallpaper/244/435/HD-wallpaper-portal-morty-rick-thumbnail.jpg" alt=""/>
        </figure>
        <button onClick={()=>{onClose(characters.id)}}>Cerrar</button>
        <button><Link to={`/detail/${id}`}>Detalles</Link></button>  

        <div className={style.design_container}>

        </div>
      </div>

    </div>
</div>
      );
    }


    