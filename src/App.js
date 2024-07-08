// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './features/cartSlice';
import Cart from './features/Cart';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="App">
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;
