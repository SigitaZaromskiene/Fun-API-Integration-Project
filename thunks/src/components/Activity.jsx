import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activitySliceActions, getActivity } from "../store/activitySlice";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PlayButton from "./PlayButton";
import ErrorMsg from "./ErrorMsg"

function Activity() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  const activity = useSelector((state) => state.activity.activity);
  const error = useSelector((state) => state.activity.error);
  const loader = useSelector((state) => state.activity.loading);



  
  return (
    <div className='modal_container_form'>
        
    <FontAwesomeIcon className='modal_container_form_icon' icon={faX} onClick={()=>dispatch(activitySliceActions.toggleModalVisability())}/>
    <div className='activities'>
        <h3>What should I do today?</h3>
        {loader ? <Loader/>: <><p>{activity.activity}</p>
        <PlayButton text='Try again' action={()=>dispatch(getActivity())}></PlayButton></>}
      </div>
      {error && <ErrorMsg text={error}/>}
    </div>
  );
}

export default Activity;
