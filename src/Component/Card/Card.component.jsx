import React from "react";
import "./Card.component.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2& size=180*180`}
      />
      <h1>{props.monster.name} </h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
