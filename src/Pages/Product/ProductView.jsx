import React from "react";
import "./ProductView.scss";
import { Link } from "react-router-dom";

const ProductView = ({
  updateSearchQuery,
  setSearchQuery,
  searchQuery,
  filteredData,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="">
        <span className="">Loading. . .</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="container">
      <label className="input">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="search" onClick={updateSearchQuery}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        </button>
      </label>

      <div className="main-div">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="line-clamp">{item.description}</p>
              <div className="card-actions">
                <span className="price">${item.price}</span>
                <button className="btn">
                  <Link to={`/product/${item.id}`}>Detail</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
