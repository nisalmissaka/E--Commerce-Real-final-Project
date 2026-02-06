import React from 'react'
import './OrderTable.css'

const OrderTable = () => {
  const orders = [
    { id: 'ORD-001', date: '2026-02-01', product: 'Wireless Mouse', amount: 'Rs. 2,500', status: 'Delivered' },
    { id: 'ORD-002', date: '2026-02-03', product: 'Keyboard K12', amount: 'Rs. 5,000', status: 'Shipped' },
    { id: 'ORD-003', date: '2026-02-05', product: 'USB Hub', amount: 'Rs. 1,200', status: 'Processing' },
    { id: 'ORD-004', date: '2026-02-06', product: 'Monitor Stand', amount: 'Rs. 3,800', status: 'Cancelled' },
  ];
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
        {orders.map((order) =>(
          <tr key={order.id}>
            <td className='order-id'>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.product}</td>
            <td>{order.amount}</td>
            <td>
              <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
            </td>
            <td>
              <button className='view-btn'>See More</button>
            </td>
          </tr>
       ) )}
      </tbody>
      </table>
    </div>
  )
}

export default OrderTable

