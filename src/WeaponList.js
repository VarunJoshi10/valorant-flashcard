import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weapon from './Weapon';
import './weapon.css'

const WeaponList = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/weapons');
        setWeapons(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <div className="weapon-list-container">
      {weapons.map(weapon => (
        <Weapon
          key={weapon.uuid}
          name={weapon.displayName}
          image={weapon.displayIcon}
        />
      ))}
    </div>
  );
};

export default WeaponList;
