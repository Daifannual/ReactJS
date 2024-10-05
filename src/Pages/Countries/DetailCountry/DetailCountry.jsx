import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCountryView from "./DetailCountryView";

const initialState = {
  data: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      throw new Error(`error di case : ${action.type}`);
  }
};

const DetailCountry = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();

  const getDetail = async () => {
    const response = await axios.get(
      `https://freetestapi.com/api/v1/countries/${id}`
    );
    dispatch({ type: "FETCH_SUCCESS", payload: response.data });
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
<DetailCountryView
  data={state.data}
/>
  );
};

export default DetailCountry;
