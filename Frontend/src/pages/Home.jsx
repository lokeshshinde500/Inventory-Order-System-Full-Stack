import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllProducts } from "../hooks/MyComponent";
import ProductCard from "../components/ProductCard";

function Home() {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

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

  return (
    <>
      {/* section fitness programs */}
      <section className="section-fitness-programs my-5">
        <div className="container mx-auto px-4">
          <div className="section-title py-10">
            <h2 className="text-3xl font-semibold text-blue-500 uppercase text-center">
              OUR Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
