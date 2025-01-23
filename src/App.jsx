import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from '../src/Components/Footer/index'
const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // Cambiado para ser consistente

  useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data); // Almacena los datos en el estado
      console.log(response.data); // Revisa los datos en la consola
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList: countryList || [], // Asegura que sea un arreglo
    setSelectedCountry,
    selectedCountry,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { MyContext };
