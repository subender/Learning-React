import React from "react";
import { StyledCard } from "./styles/StyledCard.styled";
const Card = ({ items: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
