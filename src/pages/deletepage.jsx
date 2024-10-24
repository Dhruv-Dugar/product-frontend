import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Deletepage() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleDelete = async (productID) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${productID}`)
        setProducts(products.filter(product => product._id != productID))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <table border='2' cellSpacing='0' cellPadding='10'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product._id}</td>
                <td>{product.p_name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Deletepage;
