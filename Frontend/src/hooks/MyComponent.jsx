import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const UserSignUp = async (data) => API.post("/auth/register", data);
export const UserSignIn = async (data) => API.post("/auth/login", data);

// get all product for user
export const getAllProducts = async (token) =>
  API.get("/user/product", {
    headers: { Authorization: `Bearer ${token}` },
  });

//  Add new product
export const AddlProduct = async (product, token) =>
  API.post("/product", product, {
    headers: { Authorization: `Bearer ${token}` },
  });

//   delete product by id
export const deleteProduct = async (id, token) =>
  API.delete(`/product/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//   update product by id
export const updateProduct = async (id, product, token) =>
  API.patch(`/product/${id}`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
