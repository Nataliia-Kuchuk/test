
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IStarship } from "./types";


const StarshipsList = () => {
    const [starships, setStarships] = useState<IStarship[]>([]);
    const navigate = useNavigate()
   const fetchData = async () => {
     try {
       const response = await axios.get("https://swapi.dev/api/starships");
       const data = response.data;
       setStarships(data.results);
     } catch (error) {}
   };

   useEffect(() => {
     fetchData();
   }, []);
   const onDetailed = (url: string) => {
     const idRegexp = /\/([0-9]*)\/$/;
     //@ts-ignore
     const id = url.match(idRegexp)[1];
       console.log(id);
       navigate(`/${id}`)
   };
   return (
     <div className="App">
       {starships.map((starship) => (
         <div onClick={() => onDetailed(starship.url)}>{starship.name}</div>
       ))}
     </div>
   );
};

export default StarshipsList;