import React, { useCallback, useEffect, useReducer, useState } from "react";
import axios from "axios";
import CountriesView from "./CountriesView";
import { useSearchParams } from "react-router-dom";

const initialState = {
  data: [],
  filteredData: [],
  loading: true,
  country: [],
  searchResult: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      throw new Error(`error di case : ${action.type}`);
  }
};

const Countries = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [search, setSearch] = useSearchParams();
  const searchCountry = search.get("searchcountry");

  const getCountries = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries"
    );
    const data = await response.data;
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  };

  useEffect(() => {
    if (!searchCountry) {
      getCountries();
    } else {
      handleChange(searchCountry);
    }
  }, [searchCountry]);

  const handleChange = useCallback(
    async (input) => {
      setSearch({ searchcountry: input });

      const response = await axios.get(
        `https://freetestapi.com/api/v1/countries?search=${input}`
      );
      const data = await response.data;
      dispatch({ type: "SET_FILTER", payload: data });
    },
    [searchCountry]
  );

  const filterResult = searchCountry ? state.filteredData : state.data;

  return (
    <CountriesView
      searchCountry={searchCountry}
      searchResult={state.searchResult}
      filterResult={filterResult}
      handleChange={handleChange}
    />
  );
};

export default Countries;
