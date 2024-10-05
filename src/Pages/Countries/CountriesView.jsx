import React from "react";
import { Link } from "react-router-dom";

const CountriesView = ({
  handleChange,
  filterResult,
}) => {
  return (
    <div className="home bg-base-200 dark:bg-black/45 w-full h-full min-h-screen py-6">
      <label className="input mx-auto flex items-center gap-2 w-4/12 mb-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(input) => handleChange(input.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <p className="text-center font-semibold text-gray-500 mb-6">
        {filterResult?.length} Data tersedia
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mx-24">
        {filterResult?.map((country) => (
          <div
            key={country.id}
            className="card w-80 bg-base-100 mb-10 shadow-xl shadow-black/5 transition ease-in-out delay-10 hover:-translate-y-px hover:scale-104 duration-200"
          >
            <Link to={`/countries/${country.id}`}>
              <figure>
                <img
                  className="object-cover rounded-t-xl dark:filter dark:saturate-50 dark:brightness-75 dark:hover:saturate-100 dark:hover:brightness-100 transition ease-in-out duration-300"
                  src={country.flag}
                  alt={country.flag}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{country.name}</h2>
                <p>Currency: {country.currency}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesView;
