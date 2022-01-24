import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import Header from "../components/Header";
import Footer from "../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);  

const CryptoDetails = () => {
  const [prices, setPrices] = useState(null);
  const [labels, setLabels] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const p = [];
    const l = [];

    (async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
      );
      console.log(res.data.prices);
      for (let d of res.data.prices) {
        l.push(dayjs(d[0]).format("DD/MM"));
      }
      for (let d of res.data.prices) {
        p.push(d[1]);
      }
      setLabels(l);
      setPrices(p);
    })();
  }, [id]);
  console.log(prices);
  console.log(labels);

  const chartData = {
    labels,
    datasets: [
      {
        label: id.toUpperCase(),
        data: prices,
        borderColor: "rgb(191, 219, 254)",
        backgroundColor: "rgba(191, 219, 254,0.8)",
        tension: 0.5,
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-slate-900 h-screen">
      <Header />
      <div className="h-3/4 w-3/5 m-auto mt-12 mb-16">
        <Line options={{ maintainAspectRatio: false }} data={chartData} />
      </div>
      <Footer />
    </div>
  );
};

export default CryptoDetails;
