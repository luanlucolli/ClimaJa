import React, { useState } from 'react';
import './searchBar.css';
import searchIcon from './assets/lupa.png'; 
import locationIcon from './assets/pin.png'; 
import { ToastContainer, toast } from "react-toastify";
const SearchBar = ({ onSearch, onError }) => {
  const [inputValue, setInputValue] = useState(''); 

  
  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue); 
    }
  };


const handleLocationSearch = async () => {
  const reportLocationError = () => {
    toast.error('Não foi possível acessar sua localização. Insira a localização manualmente.');
  };

  if (!navigator.geolocation) {
    reportLocationError();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=b3ccb4355bfe9693c1f3e35622c89847&limit=1`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        if (data && data[0] && data[0].name) {
          const cityName = data[0].name;
          setInputValue(cityName); 
          onSearch(cityName); 
        } else {
          reportLocationError();
        }
      } catch {
        reportLocationError();
      }
    },
    () => {
      reportLocationError();
    }
  );
};



  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Insira o nome da sua cidade"
        className="search-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
      />
      <button className="search-btn" onClick={handleSearch}>
        <img src={searchIcon} alt="Ícone de busca" className="icon" />
      </button>
      <button className="location-btn" onClick={handleLocationSearch}>
        <img src={locationIcon} alt="Ícone de localização" className="icon" />
      <p>localização atual</p>
      </button>
    </div>
  );
};

export default SearchBar;
