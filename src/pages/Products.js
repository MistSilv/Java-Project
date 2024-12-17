import React, { useState } from 'react';
import './styleAPM.css';

const Products = () => {

  const [products, setProducts] = useState([
      { id: 1, name: 'Windowns 11 key', price:'3000 zł', quantity: 10 },
      { id: 2, name: 'Produkt 2', price:'NaN', quantity: 5 },
      { id: 3, name: 'Produkt 3', price:'NaN', quantity: 20 },
      { id: 4, name: 'RTX 3060', price:'1690 zł', quantity: 8 },
      { id: 5, name: 'Produkt 5', price:'NaN', quantity: 8 },
      { id: 6, name: 'Produkt 6', price:'NaN', quantity: 8 },
    ]);
    return (
      <div className="admin-page">
        <h1>Lista Produktów</h1>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>Ilosc: {product.quantity}</p><p>Cena: {product.price}</p>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Products;
