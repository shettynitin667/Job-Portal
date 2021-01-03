import React from "react";
import "./card.css";

const Card = ({ candidate }) => {
  return (
    <div className="userCard">
      <div className="userImage">
        <img src={candidate.Image} />
      </div>

      <p className="userName">{candidate.name}</p>
    </div>
  );
};

export default Card;
