import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import  "../App.css";

function Home () {

    const [pokemon, setPokemon] = useState({});
    
    function random () {
        function randomNumber() {
            return Math.floor(Math.random() * 100) + 1}

            let URL = `https://pokeapi.co/api/v2/pokemon/1${randomNumber()}`;
            axios(URL).then((reponse) => {
                
                let pok = reponse.data;
                setPokemon(pok)
            })
            
    }
    
    useEffect (() => {
        random()
    }, [] )
    console.log("pokemon =", pokemon.types)

    if (pokemon.types === undefined) {
        return (
            <div>
                <h3>{pokemon.name}</h3>
                <h3>{pokemon.height}</h3>
                <h3>{pokemon.weight}</h3>
                <button className="btn btn-primary" onClick={random}>Cliquez</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{pokemon.name}</h3>
                <h3>{pokemon.height}</h3>
                <h3>{pokemon.weight}</h3>
                <h3>{pokemon.types[0].type.name}</h3>
                <button className="btn btn-primary" onClick={random}>Cliquez</button>
            </div>
        )
    }
}

export default Home;