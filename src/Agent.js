import React from 'react';
import './Agent.css'
const Agent = ({ name, description, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name}/>
    </div>
  );
};

export default Agent;
