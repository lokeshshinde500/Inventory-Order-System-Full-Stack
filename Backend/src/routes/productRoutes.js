import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  getProducts,
  updateOrderStaus,
  updateProduct,
  viewOrders,
} from "../controllers/productController.js";
const routes = Router();

// crud for product

// 1. create / add new product
routes.post("/", createProduct);

// 2. get all products
routes.get("/all", getAllProducts);

// 3. get all products of admin
routes.get("/", getProducts);

// 4. get a single product by id
routes.get("/:productId/single", getProduct);

// 5. delete a product by id
routes.delete("/:productId", deleteProduct);

// 6. update a product by id
routes.patch("/:productId", updateProduct);

// 7. view all orders
routes.get("/order", viewOrders);

// 8. update status of ordered product by order id
routes.patch("/:orderId/updateStatus", updateOrderStaus);

export default routes;
