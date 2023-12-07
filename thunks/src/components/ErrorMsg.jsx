import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { memeSliceActions } from "../store/memeSlice";

function ErrorMsg({text}) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(memeSliceActions.toggleErrorMessageVisibility());
    }, 2000);
  }, [dispatch]);


  return (
    <div className="error_container">
      <p>{text}</p>
    </div>
  );
}

export default ErrorMsg;
