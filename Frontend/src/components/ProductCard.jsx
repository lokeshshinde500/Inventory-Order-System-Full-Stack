import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="bg-blue-50 shadow-lg rounded-lg p-4 m-2 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800">
        {product.productName}
      </h3>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <p className="text-gray-600">
        Price: <span className="font-bold">${product.price.toFixed(2)}</span>
      </p>
      <p className="text-gray-600">Stock: {product.stock}</p>
      <p className="text-gray-600">Warranty: {product.warranty}</p>
      <p className="text-gray-600">Supplier: {product.supplier}</p>
      <p className="text-gray-600">Contact: {product.contactNumber}</p>
      <p className="text-gray-600">Contact: {product._id}</p>

      <button
        className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Cancel" : "Order Now"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleOrderSubmit} className="mt-4">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <div className="mb-4">
            <label className="block text-sm text-gray-700">Customer Name</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Address</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Quantity</label>
            <input
              type="number"
              min="1"
              className="border rounded p-2 w-full"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductCard;
