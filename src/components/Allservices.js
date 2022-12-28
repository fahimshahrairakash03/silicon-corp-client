import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Allservices = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className="text-center text-5xl my-10 font-bold">All Products</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ProductCard key={service._id} service={service}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
