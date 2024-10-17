import React, { useState } from "react";
import InputGroup from "../components/InputGroup";
import { toast } from "react-toastify";
import { AddlProduct } from "../hooks/MyComponent";

const AddProduct = () => {
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    price: "",
    stock: "",
    warranty: "",
    contactNumber: "",
    supplier: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await AddlProduct(product, token);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setProduct({
        productName: "",
        brand: "",
        price: "",
        stock: "",
        warranty: "",
        contactNumber: "",
        supplier: "",
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <InputGroup
          label="Product Name"
          name="productName"
          type="text"
          placeholder="Enter Product Name"
          value={product.productName}
          setValue={setProduct}
        />
        <InputGroup
          label="Brand"
          name="brand"
          type="text"
          placeholder="Enter Brand"
          value={product.brand}
          setValue={setProduct}
        />
        <InputGroup
          label="Price"
          name="price"
          type="number"
          placeholder="Enter Price"
          value={product.price}
          setValue={setProduct}
        />
        <InputGroup
          label="Stock"
          name="stock"
          type="number"
          placeholder="Enter Stock Quantity"
          value={product.stock}
          setValue={setProduct}
        />
        <InputGroup
          label="Warranty"
          name="warranty"
          type="text"
          placeholder="Enter Warranty Details"
          value={product.warranty}
          setValue={setProduct}
        />
        <InputGroup
          label="Contact Number"
          name="contactNumber"
          type="text"
          placeholder="Enter Contact Number"
          value={product.contactNumber}
          setValue={setProduct}
        />
        <InputGroup
          label="Supplier"
          name="supplier"
          type="text"
          placeholder="Enter Supplier Name"
          value={product.supplier}
          setValue={setProduct}
        />
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
          >
            {loading ? "Please wait" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
