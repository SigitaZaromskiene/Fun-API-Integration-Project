import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dogImagesActions, getDogsImg } from "../store/dogsImages";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PlayButton from "./PlayButton";
import ErrorMsg from "./ErrorMsg";

function DogsImage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getDogsImg());
  }, [dispatch]);

  const dogsImg = useSelector((state) => state.dogs.dogsImg);
  const loader = useSelector((state) => state.dogs.loading);
  const error = useSelector((state) => state.dogs.error);


  return (
    <div className="modal_container_form">
      <FontAwesomeIcon
        className="modal_container_form_icon"
        icon={faX}
        onClick={() => dispatch(dogImagesActions.toggleModalVisability())}
      />
      <div className="activities">
        <h3>Cute dog picture</h3>
        {loader ? (
          <Loader />
        ) : (

          <div className='dogs_container'>
          <img className='dogs_container_img'src={`${dogsImg.message}`} alt="Funny dog" />
          <PlayButton text='Try again' action={()=>dispatch(getDogsImg())}/>
          </div>
        )}
      </div>
      {error && <ErrorMsg text={error}/>}
    </div>
  );
}

export default DogsImage;
