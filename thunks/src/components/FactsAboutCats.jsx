import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCatsFacts } from "../store/factsAboutCats";
import Loader from "./Loader";

function FactsAboutCats() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getCatsFacts ());
  }, [dispatch]);

  const fact = useSelector((state) => state.cats.fact);

  const loader = useSelector((state) => state.activity.loading);

  console.log(loader)

  
  return (
    <div className='activities'>
        <h3>What should I do today?</h3>
        {loader ? <Loader/>: <p>{fact}</p>}
      
    </div>
  );
}

export default FactsAboutCats;