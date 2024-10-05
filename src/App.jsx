import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profil from "./Pages/Profil";
import Navbar from "./Components/Navbar";
import Detail from "./Pages/Detail";
import Error from "./Pages/Error";
import Product from "./Pages/Product/Product";
import DetailProduct from "./Pages/Product/DetailProduct/DetailProduct";
import Countries from "./Pages/Countries/Countries";
import CountriesDetail from "./Pages/Countries/DetailCountry/DetailCountry";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const theme = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme} >
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/countries/:id" element={<CountriesDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
