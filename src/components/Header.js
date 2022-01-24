import React from "react";
import logo from "../assets/Crypto_gate.png";
import { Link } from "react-router-dom";

import Metamask from "./Metamask";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link className="flex items-center ml-32" to="/">
        <img src={logo} alt="Best Crypto website logo" className="w-20" />
        <h2 className="font-bold text-blue-200">CryptoGate</h2>
      </Link>

      <nav className="flex items-center mr-32 text-blue-200">
        {/* <Link className="mr-6" to="/market">
          Market
        </Link> */}
        <Link className="mr-6" to="/news">
          News
        </Link>
        {/* <Link className="mr-6" to="/tutorials">
          Tutorials
        </Link> */}
        <Link className="mr-6" to="/wallet">
          Wallet
        </Link>
        <button
          className="border-solid border-2 rounded-lg
        p-0.5 px-2"
        >
          <Metamask />
        </button>
      </nav>
    </div>
  );
};

export default Header;
