import React from "react";
import "./card.css";

export const Card = ({ monster }) => (
  <>
    <div className='card-container'>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}
        alt={monster.name}
      />
      <h2>{monster.name}</h2>
    </div>
  </>
);

export default Card;
