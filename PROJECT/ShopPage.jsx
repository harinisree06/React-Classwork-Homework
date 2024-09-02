import React, { useState } from 'react';

function ShopPage() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Soccer Ball',
      price: 29.99,
      image: 'https://th.bing.com/th/id/OIP.vVIxz5SS3y8RoFpVXdwcpAHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Basketball',
      price: 34.99,
      image: 'https://th.bing.com/th/id/OIP.jov0Fx6VwmdnoTLFtF5wpAHaHb?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Tennis Racket',
      price: 89.99,
      image: 'https://th.bing.com/th/id/OIP.UDhe6AJjaSm6W9QO6RMQnQAAAA?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h2>Sports Shop</h2>
      <div style={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={styles.cartContainer}>
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  productsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  productCard: {
    width: '200px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  cartContainer: {
    marginTop: '40px',
    textAlign: 'left',
    maxWidth: '400px',
    margin: '0 auto',
  },
};

export default ShopPage;
