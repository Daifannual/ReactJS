// Home.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import HomeView from "./HomeView";
import { useCallback } from "react";

const Home = () => {
  const [resto, setResto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const [cari, setCari] = useSearchParams();
  const handleSearch = cari.get("cariProduct");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://restaurant-api.dicoding.dev/list"
      );
      setResto(response.data.restaurants);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearch = useCallback(
    async (input) => {
      try {
        const response = await axios.get(
          `http://restaurant-api.dicoding.dev/search?q=${input}`
        );
        setResult(response.data.restaurants);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    if (!handleSearch) {
      fetchData();
    } else {
      fetchSearch(handleSearch);
    }
  }, [handleSearch]);

  const handleChange = (input) => {
    if (input === "") {
      setCari({});
      fetchData();
    } else {
      setCari({ cariProduct: input });
      fetchSearch(input);
    }
  };

  const dataToDisplay = result.length > 0 ? result : resto;

  return (
    <HomeView
      dataToDisplay={dataToDisplay}
      loading={loading}
      error={error}
      onSearchChange={(input) => handleChange(input.target.value)}
    />
  );
};

export default Home;
