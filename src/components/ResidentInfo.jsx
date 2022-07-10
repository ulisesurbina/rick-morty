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
    <div className="Row sm-col-12 md-col-6 lg-col-4">
      <div className="CardResident">
        <div>
          <img style={{
            boxShadow:
              character.status === "Dead"
                ? " 5px 5px 5px red"
                : character.status === "unknown"
                  ? " 5px 5px 5px yellow"
                  : " 5px 5px 5px green",
          }} src={character.image} alt="imageResident" />
        </div>
        <div>
          <h2><spam >{character.name}</spam></h2>
          <h4>Status: <spam style={{
            color:
              character.status === "Dead"
                ? "red"
                : character.status === "unknown"
                  ? "yellow"
                  : "rgb(0, 255, 21)",
          }}>{character.status}</spam>
          </h4>
          <h4>Origin: <spam>{character.origin?.name}</spam></h4>
          <h4>Episodes where appear: <spam>{character.episode?.length}</spam></h4>
        </div>
      </div>
    </div>

    //   <div className="Row">
    //   <div className="CardResident Row">
    //     <div>
    //       <img style={{
    //         boxShadow:
    //           character.status === "Dead"
    //             ? " 5px 5px 5px red"
    //             : character.status === "unknown"
    //             ? " 5px 5px 5px yellow"
    //             : " 5px 5px 5px green",
    //       }} src={character.image} alt="imageResident" />
    //     </div>
    //     <div>
    //       <h2><spam >{character.name}</spam></h2>
    //       <h4>Status: <spam style={{
    //         color:
    //           character.status === "Dead"
    //             ? "red"
    //             : character.status === "unknown"
    //             ? "yellow"
    //             : "rgb(0, 255, 21)",
    //       }}>{character.status}</spam>
    //       </h4>
    //       <h4>Origin: <spam>{character.origin?.name}</spam></h4>
    //       <h4>Episodes where appear: <spam>{character.episode?.length}</spam></h4>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ResidentInfo;