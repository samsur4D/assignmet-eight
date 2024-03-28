import React from 'react';
import { Link } from 'react-router-dom';

const Sort = () => {
    return (
        <div>

      <div>
      <div className="navbar ">
  <div className="">
    <ul className="menu menu-horizontal px-1">
     
      <li className='bg-green-400 px-10 font-bold rounded-3xl'>
        <details className='bg-green-400'>
          <summary className='bg-green-400'>
            Sort By
          </summary>
          <ul className="p-2 flex flex-col gap-2  rounded-t-none">
            <Link className='bg-blue-400 rounded-2xl px-5 py-2'><a>Rating!</a></Link>
            <Link className='bg-blue-400 rounded-2xl px-5 py-2'><a>Pricing!</a></Link>
            <Link className='bg-blue-400 rounded-2xl px-5 py-2'><a>Pages!</a></Link>
          </ul>
        </details>
      </li>
    </ul>
  </div>
            </div>
      </div>

        </div>
    );
};

export default Sort;