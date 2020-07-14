import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ monster }) => {
  return (
    <div className='card-list'>
      {monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
