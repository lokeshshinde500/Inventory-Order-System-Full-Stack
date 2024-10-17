import React from 'react';

const MyProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-blue-50 shadow-lg rounded-lg p-4 m-2 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800">{product.productName}</h3>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <p className="text-gray-600">Price: <span className="font-bold">${product.price.toFixed(2)}</span></p>
      <p className="text-gray-600">Stock: {product.stock}</p>
      <p className="text-gray-600">Warranty: {product.warranty}</p>
      <p className="text-gray-600">Supplier: {product.supplier}</p>
      <p className="text-gray-600">Contact: {product.contactNumber}</p>
      <div className="flex justify-between mt-4">
        <button 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button 
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          onClick={() => onDelete(product._id)} // Assuming product has an _id field
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyProductCard;
