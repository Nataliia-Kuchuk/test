import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Starship from './Starship';
import StarshipsList from './StarshipsList';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarshipsList />} />
        <Route path="/:id" element={<Starship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
