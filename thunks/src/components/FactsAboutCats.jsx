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
import PlayButton from "./PlayButton";
import ErrorMsg from "./ErrorMsg";

function FactsAboutCats() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getCatsFacts());
  }, [dispatch]);

  const fact = useSelector((state) => state.cats.fact);
  const loader = useSelector((state) => state.cats.loading);
  const error = useSelector((state) => state.cats.error);

  return (
    <div className="modal_container_form">
      <FontAwesomeIcon
        className="modal_container_form_icon"
        icon={faX}
        onClick={() =>
          dispatch(factsAboutCatsSliceActions.toggleModalVisability())
        }
      />
      <div className="activities">
        <h3>Curiouse about cats?</h3>
        {loader ? (
          <Loader />
        ) : (
          <>
            <p>{fact.fact}</p>
            <PlayButton
              text="Try again"
              action={() => dispatch(getCatsFacts())}
            />
          </>
        )}
      </div>
      {error && <ErrorMsg text={error} />}
    </div>
  );
}

export default FactsAboutCats;
