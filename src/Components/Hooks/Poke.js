import React, { useState, useEffect } from "react";
import axios from "axios";

const Poke = () => {
  const [pokemon, setPokemon] = useState([]);

  // useEffect(()=> {
  // return ()=>{

  // }
  // },[])

  //#useEffect takes a callback function and an array as its parameters
  useEffect(
    () => {
      //#componentDidMount
      axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
        setPokemon(res.data.results);
      });
      /* ------------------- Only include the return if you want a componentWillUnmount ------------------------*/
      return () => {
        //# componentWillUnmount
        //# cleanup or something on unmount
      };
      /* ------------------- Only include the return if you want a componentWillUnmount ------------------------*/
    },
    [
      //#  dependecy array - whatever is inside the array will trigger the useEffect when it changes
      //#   conditions for componentDidUpdate
    ]
  );

  return <div>{JSON.stringify(pokemon)}</div>;
};

export default Poke;
