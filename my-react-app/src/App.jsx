import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setproducts(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="row">
                {products.map(item => (
                  <div className="col-md-4 mb-3" key={item.id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: "250px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                        <button className="btn btn-primary">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App

