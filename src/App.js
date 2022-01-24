import { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Spinner from './components/Spinner';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((data) => {
        setTimeout(() => {
          setData(data.data);
        }, 1000);
      });
  }, []);

  return (
    <div className=' bg-slate-900 h-screen'>
      <Header />
      <Main />
      {data ? <Board data={data} /> : <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
