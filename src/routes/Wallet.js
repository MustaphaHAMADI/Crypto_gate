import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["BTC", "ETH", "XRP", "SAND", "MATIC", "MANA"],
  datasets: [
    {
      label: "Wallet",
      data: [31, 19, 8, 8, 16, 17],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Wallet = () => {
  return (
    <div className="h-screen bg-slate-900  ">
      <Header />
      <div className="flex justify-evenly bg-slate-900 ">
      <div className=" h-96 mt-48 mb-96 ">
        <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        
      </div>
      <iframe
      title="uniswap swap client"
  src="https://app.uniswap.org/#/swap?outputCurrency=0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F"
  height="550px"
  width="30%"
  className="mr-8 rounded-xl mt-24"
/>
      </div>
      <Footer />
    </div>
  );
};

export default Wallet;
