import  style  from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id,setId]=useState("");
   
   function handleChange(event){
      event.preventDefault()
      setId(event.target.value)
   }

   return (
      <div className={style.navBar}>
         <nav>
            <input type='search' onChange={handleChange} value={id}/>
            <button onClick={()=>onSearch(id)}>Agregar</button>
         </nav>
      </div>
   );
}
