import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipedata,setrecipedata]=useState([])
  const [favlist,setfavlist]=useState([])

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam?searchParam:"apple"}`
      );

      const data = await res.json();
 console.log(data)
      if(data && data.data.recipes.length>1){
        setrecipedata(data?.data?.recipes)
        setLoading(false);
        setSearchParam("");
      }
      

     
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  const setfavouritesproducts=(currentproduct)=>{
const listsoffavs=[...favlist]
if(listsoffavs.indexOf(currentproduct)==-1){
  listsoffavs.push(currentproduct)
}
else{
  listsoffavs.splice(currentproduct,1)
}
setfavlist(listsoffavs)
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        setSearchParam,
        handleSubmit,
        recipedata,
        favlist,
        setfavouritesproducts
     
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}