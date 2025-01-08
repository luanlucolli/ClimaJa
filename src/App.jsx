import React, { useState } from "react";
import Headers from "./Headers";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3ccb4355bfe9693c1f3e35622c89847&units=metric&lang=pt`
      );

      if (!response.ok) {
        switch (response.status) {
          case 404:
            throw new Error("Cidade não encontrada! Tente novamente.");
          case 401:
            throw new Error("Chave de API inválida ou expirada.");
          case 429:
            throw new Error("Limite de requisições excedido. Tente novamente mais tarde.");
          default:
            throw new Error("Erro ao buscar os dados. Tente novamente mais tarde.");
        }
      }

      const data = await response.json();
      setWeatherData(data);

     
      toast.success("Dados climáticos carregados com sucesso!");
    } catch (error) {
     
      toast.error(error.message || "Erro desconhecido. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="app-container">
      <Headers />
      <SearchBar onSearch={fetchWeather} />
      
      <ToastContainer
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
      {weatherData && <WeatherCard weatherData={weatherData} />}

    </div>
  );
};

export default App;
