import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardLoader from '../components/CardLoader';
import logo from '../assets/Crypto_gate.png';

const News = () => {
  const [data, setData] = useState(null);
  const [formSubmit, setFormSubmit] = useState(false);
  useEffect(() => {
    axios
      .get(
        'https://newsdata.io/api/1/news?apikey=[YOUR_API_KEY]&q=cryptocurrencies&language=en'
      )
      .then((data) => {
        setTimeout(() => {
          setData(data.data.results);
        }, 3000);
      });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
  };
  return (
    <div className='bg-slate-900 h-screen'>
      <Header />
      <div className='grid grid-cols-2 p-16 bg-slate-900 '>
        <div className='text-blue-200 bg-slate-800 m-5 rounded-xl  h-96 sticky top-7 p-14 hover:drop-shadow-[0_4px_3px_rgba(255,255,255,0.10)]'>
          {formSubmit ? (
            <>
              <h2 className='text-7xl font-semibold space-y-4'>Newsletter</h2>
              <p className='mt-7 text-2xl'>
                Thank your for your subscription !
              </p>
              <form className='flex flex-col mt-7 '></form>
            </>
          ) : (
            <>
              <h2 className='text-7xl font-semibold space-y-4'>Newsletter</h2>
              <p className='mt-7'>
                Subscribe to our newsletter to reveive the latest crypto news
              </p>
              <form className='flex flex-col mt-7 ' onSubmit={onFormSubmit}>
                <input
                  className='rounded-md h-10 p-3'
                  type='email'
                  name='name'
                  placeholder='Enter your email'
                />

                <button
                  className='mt-7   h-10 w-24 m-auto  text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl'
                  type='submit'
                  value='Envoyer'
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div className='bg-slate-900 grid grid-cols-2'>
          {data ? (
            data &&
            data.map((e) => (
              <div className='text-blue-200 bg-slate-800 rounded-xl w-46 m-5 flex flex-col items-center text-center h-48 justify-between  hover:drop-shadow-[0_4px_3px_rgba(255,255,255,0.10)]'>
                <img
                  src={logo}
                  alt='article logo'
                  className='w-32 rounded-xl'
                />
                <h3 className='text-sm'>{e.title}</h3>
                <p>{e.descritpion}</p>

                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={e.link}
                  className='text-white w-24 mb-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl'
                >
                  See more
                </a>
              </div>
            ))
          ) : (
            <div className='bg-slate-900 grid grid-cols-2 gap-x-72'>
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
