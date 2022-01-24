import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Market from "./routes/Market";
import News from "./routes/News";
import Tutorials from "./routes/Tutorials";
import Wallet from "./routes/Wallet";
import CryptoDetails from "./routes/CryptoDetails";
import NotFound from "./routes/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <MetaMaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
          <Route path="market" element={<Market />} />
          <Route path="news" element={<News />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="market/:id" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
