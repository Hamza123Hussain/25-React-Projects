import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/Context';

const Details = () => {
    // const{    favlist, setfavouritesproducts}=useContext(GlobalContext)
  const [details, setDetails] = useState({});
  const { id } = useParams();

  console.log(favlist)

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        if (data?.data) {
          setDetails(data?.data?.recipe);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    }

    getRecipeDetails();
  }, [id,favlist]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={details.image_url}
        alt={details.title}
      />
      <div className="absolute  inset-0 flex flex-col justify-end p-8">
        <div className="bg-transparent bg-opacity-90 rounded-xl p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold font-bold">
            {details.publisher}
          </div>
          <a
            href={details.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline font-bold"
          >
            {details.title}
          </a>
          <p className="mt-2 text-black font-bold">Cooking Time: {details.cooking_time} mins</p>
          <p className="mt-2 text-black font-bold">Servings: {details.servings}</p>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Ingredients:</h3>
            <ul className="mt-2">
              {details.ingredients &&
                details.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-black font-bold">
                    {ingredient.quantity} {ingredient.unit} {ingredient.description}
                  </li>
                ))}
            </ul>
          </div>
          <button  className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
