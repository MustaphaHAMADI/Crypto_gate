import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col text-blue-200 bg-slate-900">
      <div className="flex mb-3">
        <a
          className="text-3xl mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <AiOutlineInstagram />
        </a>
        <a
          className="text-3xl mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <AiOutlineGithub />
        </a>
        <a
          className="text-3xl mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <AiOutlineFacebook />
        </a>
        <a
          className="text-3xl mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="flex flex-col">
        <ul className="flex mb-3">
          <li className="ml-9">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="ml-9">
            <Link to="/market">Market</Link>
          </li> */}
          <li className="ml-9">
            <Link to="/news">News</Link>
          </li>
          {/* <li className="ml-9">
            <Link to="/tutorials">Tutorials</Link>
          </li> */}
          <li className="ml-9">
            <Link to="/wallet">Wallet</Link>
          </li>
        </ul>
        <p className="text-center mb-3">
          © 2022 CryptoGate All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
