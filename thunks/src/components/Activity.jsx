import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivity } from "../store/activitySlice";

function Activity() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getActivity());
  }, [dispatch]);

  const activity = useSelector((state) => state.activity.activity);

  console.log(activity)
  return (
    <div className='activities'>
        <h3>What should I do today?</h3>
      <div>{activity.activity}</div>
    </div>
  );
}

export default Activity;
