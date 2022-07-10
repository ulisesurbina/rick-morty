import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import '../App.css';

const Location = () => {

    const [location, setLocation] = useState({});
    const [searchLocation, setSearchLocation] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
            .then((res) => setLocation(res.data));
    }, []);

    const getLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}/`)
            .then((res) => setLocation(res.data));
    };

    console.log(location);

    return (
        <div>
            <div className="Location">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="form-control"
                        placeholder="Type a location id" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={getLocation} class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
                <div>
                    <div>
                        <h1><spam>{location.name}</spam></h1>
                    </div>
                    <div className="Row">
                        <div className="CardLocation">
                            <h3>Type: {location.type}</h3>
                        </div>
                        <div className="CardLocation">
                            <h3>Dimension: {location.dimension}</h3>
                        </div>
                        <div className="CardLocation">
                            <h3>Population: {location.residents?.length}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul style={{padding:0}}>
                    {location.residents?.map(resident => (
                        <ResidentInfo resident={resident} key={resident} />
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Location;