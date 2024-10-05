import { useState, useEffect, useReducer, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductView from "./ProductView";

// const Product = () => {
//   const [products, setProduct] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       setProduct(response.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     //smentara
//     fetchProduct();
//   }, []);

const initialState = {
  data: [],
  filteredData: [],
  loading: true,
  error: null,
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
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_FILTER_DATA":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Product = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  const updateSearchQuery = useCallback(() => {
    setSearchParams({ q: searchQuery });
    const filteredData = state.data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch({ type: "SET_FILTER_DATA", payload: filteredData });
  }, [searchQuery, setSearchParams, state.data]);

  useEffect(() => {
    fetchProduct();
  }, []);

console.log(state)

  return (
    <div>
      <ProductView
        updateSearchQuery={updateSearchQuery}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        filteredData={state.filteredData}
        loading={state.loading}
        error={state.error}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default Product;
