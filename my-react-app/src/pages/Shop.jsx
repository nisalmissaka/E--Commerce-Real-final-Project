import React, { useEffect, useState } from "react";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
      setFilter(result);
      setLoading(false);
    };
    getProducts();
  }, []);

  // Filter products by category
  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };

  // Loading component
  const Loading = () => {
    return <h4 className="text-center">Loading...</h4>;
  };

  // Product card component
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

  return (
    <div className="container my-5">
      <h1 className="display-6 fw-bolder text-center mb-4">Shop</h1>

      {/* Filter buttons */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {filter.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;

