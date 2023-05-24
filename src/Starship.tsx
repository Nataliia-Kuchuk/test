import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IStarship } from './types';
import axios from 'axios'

const Starship = () => {
    const [starship, setStarship] = useState<IStarship | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const fetchData = async() => {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
        const data = response.data
        console.log(data)
        setStarship(data)
    }
    useEffect(() => {
      fetchData()
    }, [])
    
    console.log(id)
    return (
        <div>
        <h1>Name: {starship?.name}</h1>
        <p>Starhip id is {id}</p>
        <p>Model: {starship?.model}</p>
        <p>Cargo capacity: {starship?.cargo_capacity}</p>
        <p>Length: {starship?.length }</p>
        <button onClick={() => navigate(-1)}>Go back to list</button>
      </div>
    );
};

export default Starship;