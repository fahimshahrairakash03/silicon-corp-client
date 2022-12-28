import React from "react";

const ProductCard = ({ service }) => {
  const { name, img } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-center">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
