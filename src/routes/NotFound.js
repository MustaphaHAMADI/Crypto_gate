import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mt-48 mb-56 ">
        <h1 className="text-7xl text-blue-200 font-bold">404 Not found</h1>
        <Link
          to="/"
          className="mt-12 p-3 font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl "
        >
          Return to Home Page
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
