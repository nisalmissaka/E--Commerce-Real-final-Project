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
      try {
        const response = await fetch("http://localhost:8080/product/get-all");
        const result = await response.json();
        setData(result);
        setFilter(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => 
        item.name.toLowerCase().includes(cat.toLowerCase())
      );
      setFilter(updatedList);
    }
  };

  const Loading = () => <h4 className="text-center">Loading...</h4>;

  const handleAddToCart = (item) => {
    const existingItem = cart.find((p) => p.id === item.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p))
      );
    } else {
      setCart((prev) => [...prev, { ...item, qty: 1 }]);
    }
    setShowOrder(true);
    setOrderSuccess(false);
  };

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handlePlaceOrder = () => {
  if (cart.length === 0) return;

  
  const newOrder = {
    id: `ORD-${Math.floor(Math.random() * 10000)}`, 
    date: new Date().toISOString().split('T')[0],  
    product: cart.map(item => `${item.name} (x${item.qty})`).join(', '),
    amount: `Rs. ${totalPrice.toLocaleString()}`,
    status: 'Processing'
  };


  const existingOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
  
 
  const updatedOrders = [newOrder, ...existingOrders];
  localStorage.setItem('myOrders', JSON.stringify(updatedOrders));

  setOrderSuccess(true);
  setCart([]);
  setShowOrder(false);
};

  const ProductCard = ({ item }) => (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-3 shadow-sm border-0">
        <img
          src={item.imgUrl} 
          className="card-img-top"
          height="200"
          alt={item.name}
          style={{ objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="fw-bold">{item.name}</h6>
          <p className="text-muted small mb-1">{item.color} | {item.size}</p>
          <p className="small text-secondary" style={{ fontSize: '0.85rem' }}>
            {item.description.substring(0, 60)}...
          </p>
          <p className="fw-bold text-primary mt-auto">
            Rs. {item.price.toLocaleString()}
          </p>
          <button className="btn btn-success w-100" onClick={() => handleAddToCart(item)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    
    <div className="container mt-5 pt-5 mb-5">
      <header className="text-center mb-5">
        <h1 className="display-6 fw-bolder">Sri Lankan Heritage Shop</h1>
        <hr className="w-25 mx-auto" />
      </header>

      {/* FILTER SECTION */}
      <div className="row mb-5 sticky-top bg-white py-3 shadow-sm rounded">
        <div className="col-12 d-flex justify-content-center gap-2 flex-wrap">
          <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("all")}>All</button>
          <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("T-Shirt")}>T-Shirts</button>
          <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("Cap")}>Caps</button>
          <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("Trouser")}>Trousers</button>
          <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("Sarong")}>Sarongs</button>
         <button className="btn btn-outline-dark px-4 rounded-pill" onClick={() => filterProduct("Blouse")}>Blouse</button>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {filter.length > 0 ? (
            filter.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <p className="text-center text-muted">No products found.</p>
          )}
        </div>
      )}

      {/* ORDER REVIEW SECTION */}
      {showOrder && cart.length > 0 && (
        <section className="mt-5 p-4 border-0 shadow rounded bg-white">
          <h2 className="text-center mb-4">Review Your Order</h2>
          <div className="table-responsive">
            <table className="table align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="fw-bold">{item.name}</td>
                            <td>Rs. {item.price.toLocaleString()}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.qty}
                                    onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                                    className="form-control"
                                    style={{ width: '80px' }}
                                />
                            </td>
                            <td className="fw-bold text-success">Rs. {(item.price * item.qty).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 px-2">
            <h4>Total: <span className="text-success">Rs. {totalPrice.toLocaleString()}</span></h4>
            <button className="btn btn-primary btn-lg px-5 shadow" onClick={handlePlaceOrder}>
                Place Order Now
            </button>
          </div>
        </section>
      )}

      {orderSuccess && (
        <div className="alert alert-success text-center mt-4 border-0 shadow-sm">
          🎉 <strong>Success!</strong> Your order has been placed successfully.
        </div>
      )}
    </div>
  );
};

export default Shop;
