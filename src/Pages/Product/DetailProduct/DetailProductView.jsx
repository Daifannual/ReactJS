import React from "react";
import "./DetailProductView.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const DetailProductView = ({ detail, loading, error, id }) => {
  if (loading) {
    return <div className="load">Loading...</div>;
  }

  if (error) {
    return <div className="load">Error: {error}</div>;
  }

  if (!detail) {
    return <div className="load">No product found</div>;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <img src={detail.image} alt="" />
        <h1>{detail.title}</h1>
        <p>${detail.price}</p>
        <span>{detail.category}</span>
        <span className="rate">
          {" "}
          <Icon icon="mdi:star" /> {detail.rating.rate} / {detail.rating.count} reviews
        </span>
        <p className="desc">{detail.description}</p>
      </div>
    </div>
  );
};

export default DetailProductView;
