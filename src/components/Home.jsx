import React from "react";
import Cards from "./Cards/Cards";
const Home=({characters, onClose})=>{
    return(
        <div>
            <h1>Estoy en Home</h1>
            <Cards characters={characters} onClose={onClose} />
        </div>
    );
}
export default Home;