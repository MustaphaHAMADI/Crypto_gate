import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Board = (props) => {
  const data = props.data;
  const [sorted, setSorted] = useState(data);
  const [order, setOrder] = useState(false);
  const handleSortvar = () => {
    setOrder(!order);
    const asc = (a, b) =>
      a.price_change_percentage_24h - b.price_change_percentage_24h;
    const desc = (a, b) =>
      b.price_change_percentage_24h - a.price_change_percentage_24h;
    order ? setSorted([...data].sort(desc)) : setSorted([...data].sort(asc));
  };
  return (
    <div className='p-32 bg-slate-900'>
      <div className='bg-slate-800 rounded-3xl p-3'>
        <div className='grid grid-cols-7 gap-6 mb-3 border-slate-800 border-b-1'>
          <p className=' text-blue-200 '></p>
          <p className=' text-blue-200 cursor-pointer'>Name</p>
          <p className=' text-blue-200 ml-4 cursor-pointer'>Symbol</p>
          <p className='text-blue-200 ml-4 font-bold cursor-pointer'>
            Price in USD
          </p>
          <p
            className='text-blue-200 ml-4 font-bold cursor-pointer'
            onClick={handleSortvar}
          >
            % 24h
          </p>
          <p className='text-blue-200 ml-4 font-bold cursor-pointer'>
            Market cap
          </p>
          <p className='text-blue-200 ml-4 font-bold cursor-pointer'>
            Total circulating
          </p>
        </div>
        {sorted &&
          sorted.map((e, idx) => (
            <Link to={`market/${e.id}`}>
              <div
                key={idx}
                className=' grid grid-cols-7  gap-7 space-y-3 border-slate-800 border-t-2  hover:bg-blue-900 hover:rounded-2xl'
              >
                <div className='rounded-full flex items-center text-blue-200'>
                  <span>#{e.market_cap_rank}</span>
                  <img width='90px' className='px-5' src={e.image} alt='' />
                </div>
                <p className=' text-blue-200 '>{e.name}</p>
                <p className=' text-blue-200 ml-4'>{e.symbol.toUpperCase()}</p>
                <p className='text-blue-200 ml-4 '>
                  $
                  {e.current_price < 1
                    ? e.current_price
                    : e.current_price.toLocaleString('fr-FR')}
                </p>
                <p className='text-blue-200 ml-4 '>
                  {e.price_change_percentage_24h < 0 ? (
                    <span className='flex items-center text-red-500'>
                      <IoMdArrowDropdown className='text-xl' />
                      <CountUp
                        end={Number(e.price_change_percentage_24h).toFixed(2)}
                        decimals={2}
                        duration={1}
                      />
                      %
                    </span>
                  ) : (
                    <span className='flex items-center text-green-500'>
                      <IoMdArrowDropup className='text-xl' />
                      <CountUp
                        end={Number(e.price_change_percentage_24h).toFixed(2)}
                        decimals={2}
                        duration={1}
                      />
                      %
                    </span>
                  )}
                </p>
                <p className='text-blue-200 ml-4 '>
                  {e.market_cap.toLocaleString('fr-FR')} $
                </p>
                <p className='text-blue-200 ml-4 text-sm'>
                  ${e.circulating_supply.toLocaleString('fr-FR')}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Board;
