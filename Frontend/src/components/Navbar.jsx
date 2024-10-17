import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* header */}
      <header className="bg-blue-200 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="logo">
              <img
                className="my-3"
                src="/logo.png"
                alt="logo"
                title="logo"
                width={"50px"}
              />
            </div>
            <nav>
              <ul className="flex gap-5 items-center">
                <li>
                  <Link to="/home" className="font-semibold text-blue-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/add" className="font-semibold text-blue-700">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/myProduct" className="font-semibold text-blue-700">
                    My Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="bg-blue-500 text-xs text-white p-2 rounded font-semibold hover:bg-blue-600 transition"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
