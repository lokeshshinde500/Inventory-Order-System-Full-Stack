import { Router } from "express";
import { myOrders, placeOrder } from "../controllers/userController.js";
import { getAllProducts } from "../controllers/productController.js";
const routes = Router();

// get all products
routes.get("/product", getAllProducts);

// place order
routes.post("/order", placeOrder);

// my orders history
routes.get("/myOrders", myOrders);

export default routes;
