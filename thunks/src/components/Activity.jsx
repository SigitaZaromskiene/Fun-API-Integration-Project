import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivity } from "../store/activitySlice";
import Loader from "./Loader";

function Activity() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getActivity());
  }, [dispatch]);

  const activity = useSelector((state) => state.activity.activity);

  const loader = useSelector((state) => state.activity.loading);

  console.log(loader)

  
  return (
    <div className='activities'>
        <h3>What should I do today?</h3>
        {loader ? <Loader/>: <p>{activity.activity}</p>}
      
    </div>
  );
}

export default Activity;
