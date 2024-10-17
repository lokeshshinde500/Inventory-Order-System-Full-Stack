import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import MyProductPage from "../pages/MyProductPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Navbar />
            </PrivateRoutes>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="myProduct" element={<MyProductPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
