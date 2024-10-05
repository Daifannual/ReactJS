import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../index.css"

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      const data = await response.data;
      setDetail(data.restaurant);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

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
        <span>Error! {error.massage}</span>
      </div>
    );
  }

  return (
    <div className="bg-base-200 dark:bg-black/45 w-full h-full min-h-screen py-6">
      <div className="flex flex-col-2 justify-around py-8 px-6">
        <div className="flex flex-row">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 p-4 justify-start bg-base-100 overflow-y-auto overflow-x-hidden">
                <img
                  className="mt-7 rounded-xl"
                  src={`https://restaurant-api.dicoding.dev/images/small/${detail?.pictureId}`}
                  alt=""
                />
                <div className="w-full text-left mt-4">
                  <div className="flex justify-between mr-2">
                    <h1 className="text-2xl font-bold">{detail?.name}</h1>
                    <span className="flex items-center w-fit px-2 my-2 rounded-md">
                      <Icon
                        className="text-yellow-400 mr-2"
                        icon="ph:star-fill"
                      />
                      <p className="text-xs font-bold my-1">{detail?.rating}</p>
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-400">
                    {detail?.city}
                  </p>
                  <p className="text-xs font-medium text-gray-600 mb-1 dark:text-gray-500">
                    {detail?.address}
                  </p>
                  <span>
                    {detail?.categories.map((category) => (
                      <span
                        key={category.name}
                        className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-400 mr-2 mb-2"
                      >
                        {category.name}
                      </span>
                    ))}
                  </span>
                  {detail?.customerReviews.map((review) => (
                    <div className="chat chat-start" key={review.id}>
                      <div className="chat-header font-semibold">
                        {review.name}
                        <time className="text-xs opacity-50 ml-2">
                          {review.date}
                        </time>
                      </div>
                      <div className="chat-bubble bg-gray-300 text-gray-700 dark:text-gray-400 dark:bg-white/10">
                        {review.review}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/6">
          <div>
            <h1 className="text-2xl font-bold">Deskripsi</h1>
            <p className="font-medium text-gray-500">{detail?.description}</p>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-xl mb-2">Menu</h1>
            <div className="flex justify-items-start">
              <ul className="mr-20">
                <h1 className="font-extrabold text-gray-600">Food</h1>
                {detail.menus.foods.map((food) => (
                  <li className="text-gray-500 font-medium" key={food.name}>
                    {food.name}
                  </li>
                ))}
              </ul>
              <ul className="">
                <h1 className="font-extrabold text-gray-600">Drink</h1>
                {detail.menus.drinks.map((drink) => (
                  <li className="text-gray-500 font-medium" key={drink.name}>
                    {drink.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
