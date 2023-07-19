import React from 'react';
import './Agent.css'

// import styled from 'styled-components';


const Agent = ({ name, description, displayIcon, color }) => {
  return (
    <div>
      {/* <p>{description}</p> */}
      <img src={displayIcon} alt={name}/>
      <h2>{name}</h2>
    </div>
  );
};

export default Agent;
