import React, { useContext } from "react";
import { BBContext } from "../context/context";
import './Characters.scss'

const Characters = () => {
  const { characters } = useContext(BBContext);
  return (
    <div className="characters">
      {characters.map((character) => (
          <div className="cardChar">
        <p key={character.id}>{character.name}</p>
        <img src={character.image} alt={character.name}></img>
        </div>
      ))}
    </div>
  );
};

export default Characters;
