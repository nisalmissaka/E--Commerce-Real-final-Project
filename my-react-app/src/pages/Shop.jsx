import React, { useEffect, useState } from "react";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

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

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };

  const Loading = () => <h4 className="text-center">Loading...</h4>;

  const handleAddToCart = (item) => {
    const existingItem = cart.find((p) => p.id === item.id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, qty: 1 }]);
    }

    setShowOrder(true);
    setOrderSuccess(false);
  };

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  };

 
  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    console.log("Order Placed:", cart); 

    setOrderSuccess(true);
    setCart([]);
    setShowOrder(false);
  };

  const ProductCard = ({ item }) => (
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
          <p className="fw-bold">
            Rs. {Math.round(item.price * 310.34).toLocaleString()}
          </p>
          <button
            className="btn btn-primary mt-auto"
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h1 className="display-6 fw-bolder text-center mb-4">Shop</h1>

      {/* FILTER */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-outline-dark" onClick={() => filterProduct("all")}>All</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Women</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {filter.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* PLACE ORDER */}
      {showOrder && (
        <section className="mt-5 text-center">
          <h2>Place Your Order</h2>

          {cart.map((item) => (
            <div key={item.id} className="mb-3">
              <h6>{item.title}</h6>
              <p>
                Rs. {Math.round(item.price * 310.34).toLocaleString()}
              </p>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) =>
                  handleQtyChange(item.id, Number(e.target.value))
                }
                className="form-control w-25 mx-auto"
              />
            </div>
          ))}

          <h4>
            Total: Rs. {Math.round(totalPrice * 310.34).toLocaleString()}
          </h4>

          <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </section>
      )}

      {/* SUCCESS MESSAGE */}
      {orderSuccess && (
        <div className="alert alert-success text-center mt-4">
          🎉 Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Shop;

