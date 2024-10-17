import React, { useEffect, useState } from "react";
import InputGroup from "./InputGroup";

const EditProduct = ({ product, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    onUpdate(formData);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Product Name"
          name="productName"
          type="text"
          placeholder="Enter Product Name"
          value={formData.productName || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Brand"
          name="brand"
          type="text"
          placeholder="Enter Brand"
          value={formData.brand || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Price"
          name="price"
          type="number"
          placeholder="Enter Price"
          value={formData.price || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Stock"
          name="stock"
          type="number"
          placeholder="Enter Stock Quantity"
          value={formData.stock || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Warranty"
          name="warranty"
          type="text"
          placeholder="Enter Warranty Details"
          value={formData.warranty || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Contact Number"
          name="contactNumber"
          type="text"
          placeholder="Enter Contact Number"
          value={formData.contactNumber || ""}
          setValue={setFormData}
        />
        <InputGroup
          label="Supplier"
          name="supplier"
          type="text"
          placeholder="Enter Supplier Name"
          value={formData.supplier || ""}
          setValue={setFormData}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Please wait" : "Update Product"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-2 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
