import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Shop</h2>

      <div className="row">
        {products.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top p-3" />
              <div className="card-body">
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Shop;
