import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dogImagesActions, getDogsImg } from "../store/dogsImages";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function DogsImage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getDogsImg());
  }, [dispatch]);

  const dogsImg = useSelector((state) => state.dogs.dogsImg);
  const loader = useSelector((state) => state.dogs.loading);


  return (
    <div className="modal_container_form">
      <FontAwesomeIcon
        className="modal_container_form_icon"
        icon={faX}
        onClick={() => dispatch(dogImagesActions.toggleModalVisability())}
      />
      <div className="activities">
        <h3>Funny dog picture</h3>
        {loader ? (
          <Loader />
        ) : (

          <div className='dogs_container'>
          <img className='dogs_container_img'src={`${dogsImg.message}`} alt="Funny dog" />
          </div>
        )}
      </div>
    </div>
  );
}

export default DogsImage;
