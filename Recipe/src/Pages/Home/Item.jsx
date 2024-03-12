import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black">
      <img style={{width:"400px", height:"300px"}} src={item.image_url} alt={item.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.publisher}</p>
      </div>
      <div className="px-6 py-4">
       <Link to={`/details/${item.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
