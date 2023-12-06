import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  factsAboutCatsSliceActions,
  getCatsFacts,
} from "../store/factsAboutCats";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function FactsAboutCats() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getCatsFacts());
  }, [dispatch]);

  const fact = useSelector((state) => state.cats.fact);
  const loader = useSelector((state) => state.cats.loading);

  return (
    <div className="modal_container_form">
      <FontAwesomeIcon
        className="modal_container_form_icon"
        icon={faX}
        onClick={() =>
          dispatch(factsAboutCatsSliceActions.toggleCartVisability())
        }
      />
      <div className="activities">
        <h3>Curiouse about cats?</h3>
        {loader ? <Loader /> : <p>{fact.fact}</p>}
      </div>
    </div>
  );
}

export default FactsAboutCats;
