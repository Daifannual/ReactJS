import React from "react";
import { Link } from "react-router-dom";

const HomeView = ({ dataToDisplay, loading, error, onSearchChange }) => {
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-transparent">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div role="alert" className="alert alert-error w-11/12 mx-auto mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! {error.message}</span>
      </div>
    );  
  }

  return (
    <div className="home bg-base-200 dark:bg-black/45 w-full h-full min-h-screen py-6">
      <label className="input mx-auto flex items-center gap-2 w-4/12 mb-3 bg-base-100">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={onSearchChange}
        />
      </label>
      <p className="text-center font-semibold text-gray-500">
        {dataToDisplay?.length} Data tersedia
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mx-24">
        {dataToDisplay?.map((restaurant) => (
          <div key={restaurant.id} className="card bg-base-200 w-96 shadow-2xl shadow-black/10 my-6 dark:shadow-black/10">
            <figure>
              <img
                className="w-96 h-44 object-cover"
                src={`https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`}
                alt={restaurant.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{restaurant.name}</h2>
              <p className="line-clamp-3">{restaurant.description}</p>
              <div className="card-actions justify- mt-2">
                <button className="btn btn-neutral">
                  <Link to={`/detail/${restaurant.id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
