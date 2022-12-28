import React from "react";

const Addproducts = () => {
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.product.value;
    const img = form.image.value;
    const product = { name, img };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="mt-20">
      <h1 className="my-10 text-2xl text-center font-bold">Add Product</h1>
      <form onSubmit={handleProduct}>
        <p>Product Name</p>
        <input
          name="product"
          type="text"
          placeholder="Product Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <br />
        <p>Product Image</p>
        <input
          name="image"
          type="text"
          placeholder="Product Image"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <br />
        <br />
        <br />
        <button className="btn btn-primary" type="submit ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addproducts;
