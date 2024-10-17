import { Router } from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
import { authenticate, isAdmin } from "../middleware/authenticate.js";
const routes = Router();

// auth routes
routes.use("/auth", authRoutes);

// product routes
routes.use("/product", authenticate, isAdmin, productRoutes);

// user routes
routes.use("/user", authenticate,userRoutes);

export default routes;
