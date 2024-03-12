import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Context';
import Item from './Item';

const Home = () => {
  const { recipedata, loading } = useContext(GlobalContext);

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center my-8">LOADING..........</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-8">
          {recipedata && recipedata.length > 0 ? (
            recipedata.map((ele) => (
              <div key={ele.id}>
                <Item item={ele} />
              </div>
            ))
          ) : (
            <h1 className="text-center my-8">NO ITEMS TO SHOW</h1>
          )}
       
        </div>
      )}
    </div>
  );
};

export default Home;
