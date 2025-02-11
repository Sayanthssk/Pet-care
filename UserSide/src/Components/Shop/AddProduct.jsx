import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    productImages: null, // For file input
  });

  const [message, setMessage] = useState('');

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      productImages: e.target.files,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);

    // Append images if any
    if (productData.productImages) {
      for (let i = 0; i < productData.productImages.length; i++) {
        formData.append('productImages', productData.productImages[i]);
      }
    }

    // Get shopId from localStorage
    const shopId = localStorage.getItem('userId');
    console.log('Shop ID from localStorage:', shopId); // Debugging line

    if (!shopId) {
      setMessage('Shop ID is required');
      return;
    }

    try {
      // Send POST request to add product
      const response = await axios.post(`http://localhost:5000/api/addproduct/${shopId}`, formData, {
      
      });

      // Handle success
      setMessage(response.data.message || 'Product added successfully');
    } catch (error) {
      // Handle error
      console.error('Error adding product:', error.response || error);
      setMessage('Failed to add product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Images:</label>
          <input
            type="file"
            name="productImages"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;
