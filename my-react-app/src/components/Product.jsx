import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-3">
        <img
          src={item.image}
          className="card-img-top"
          height="200"
          alt={item.title}
          style={{ objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6>{item.title}</h6>
          <p className="fw-bold">${item.price}</p>
          <button className="btn btn-primary mt-auto">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
