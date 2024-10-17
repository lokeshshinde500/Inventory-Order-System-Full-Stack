import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../hooks/MyComponent";
import MyProductCard from "../components/MyProductCard";
import { toast } from "react-toastify";
import EditProduct from "../components/EditProduct";

function MyProductPage() {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // fetch data
  const fetchData = async () => {
    try {
      const response = await getAllProducts(token);
      setProducts(response.data.products);
    } catch (error) {
      toast.error("Something Gone wrong!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onEdit = (product) => {
    setEditingProduct(product);
  };

  const onDelete = async (id) => {
    try {
      const deletedData = products.filter((products) => products._id !== id);
      setProducts(deletedData);
      const response = await deleteProduct(id, token);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onUpdate = async (data) => {
    try {
      const response = await updateProduct(data._id, data, token);
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setEditingProduct(null);
    }
  };

  return (
    <div className="p-4">
      {editingProduct ? (
        <EditProduct
          product={editingProduct}
          onUpdate={onUpdate}
          onCancel={() => setEditingProduct(null)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <MyProductCard
              key={product._id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProductPage;
