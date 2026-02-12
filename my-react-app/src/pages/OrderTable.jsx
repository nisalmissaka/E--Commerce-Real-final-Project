import React, { useEffect, useState } from 'react';
import './OrderTable.css';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
    setOrders(savedOrders);
  }, []);

  const handleDelete = (id) => {
    const filtered = orders.filter(order => order.id !== id);
    setOrders(filtered);
    localStorage.setItem('myOrders', JSON.stringify(filtered));
  };

  return (
    <div className='table-container'>
      <h2 className='title'>Recent Orders</h2>
      <table className='order-table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>  
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className='order-id'>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
                <td>
                  <button className='view-btn' onClick={() => handleDelete(order.id)}>Cancel Order</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>No orders found in storage.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;

