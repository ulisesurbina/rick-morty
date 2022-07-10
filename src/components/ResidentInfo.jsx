import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';

const ResidentInfo = ({ resident }) => {

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(resident)
      .then(res => setCharacter(res.data));
  }, []);

  console.log(character)
  return (
    <div className="Row">
    <div className="CardResident Row">
        <div>
          <img src={character.image} alt="imageResident" />
        </div>
        <div>
          <h2><spam >{character.name}</spam></h2>
          <h4>Status: <spam>{character.status}</spam></h4>
          <h4>Origin: <spam>{character.origin?.name}</spam></h4>
          <h4>Episodes where appear: <spam>{character.episode?.length}</spam></h4>
        </div>
    </div>
    </div>
  );
};

export default ResidentInfo;