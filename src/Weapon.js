import React from 'react';
// import styled from 'styled-components';


const Weapon = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
    </div>
  );
};

export default Weapon;
