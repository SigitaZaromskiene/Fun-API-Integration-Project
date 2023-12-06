import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getActivity} from "../store/activitySlice"


function Activity (){

    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch the getNames thunk action when the component mounts
        dispatch(getActivity());
      }, [dispatch]);


    const activity = useSelector(state=>state.activity.activity)
    return (
        <div>
<p>{activity.activity}</p>
        </div>
    )
}

export default Activity