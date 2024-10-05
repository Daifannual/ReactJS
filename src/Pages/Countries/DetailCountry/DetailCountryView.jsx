import React from "react";

const DetailCountryView = ({ data, loading }) => {
  return (
    <div className="w-full h-full min-h-screen bg-base-200 dark:bg-black/45 py-6 text-center">
    <h1 className="font-bold text-2xl text-gray-600 dark:text-gray-400">Country Detail</h1>
      <div className="flex flex-col-2 justify-center h-full">
        <div className="flex flex-row bg-base-100 dark:bg-black-900 rounded-2xl my-8 mx-3">
          <div className="p-10">
            <img className="rounded-xl m-2" src={data.flag} alt="" />
            <h1 className="text-3xl font-bold ml-3 mt-7 text-center text-gray-600 dark:text-gray-400">
              {data.name}
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-stretch h-full my-8">
          <div>
            <div className="text-xl font-semibold ml-3 text-center text-gray-600 dark:text-gray-400 px-5 py-6 rounded-xl mb-4 bg-base-100 dark:bg-black-900">
              <span className="flex"><p className="font-bold mr-1.5">Population: </p>{data.population}</span>
            </div>
            <div className="text-xl font-semibold ml-3 text-center text-gray-600 dark:text-gray-400 px-5 py-6 rounded-xl mb-4 bg-base-100 dark:bg-black-900">
              <span className="flex"><p className="font-bold mr-1.5">Currency: </p>{data.currency}</span>
            </div>
            <div className="text-xl font-semibold ml-3 text-center text-gray-600 dark:text-gray-400 px-5 py-6 rounded-xl mb-4 bg-base-100 dark:bg-black-900">
              <span className="flex"><p className="font-bold mr-1.5">Land Area: </p>{data.land_area}</span>
            </div>
            <div className="text-xl font-semibold ml-3 text-center text-gray-600 dark:text-gray-400 px-5 py-6 rounded-xl mb-4 bg-base-100 dark:bg-black-900">
              <span className="flex"><p className="font-bold mr-1.5">Density: </p>{data.density}</span>
            </div>
            <div className="text-xl font-semibold ml-3 text-center text-gray-600 dark:text-gray-400 px-5 py-6 rounded-xl bg-base-100 dark:bg-black-900">
              <span className="flex"><p className="font-bold mr-1.5">Capital: </p>{data.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCountryView;
