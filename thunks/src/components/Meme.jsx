import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { getMeme, memeSliceActions } from "../store/memeSlice";
import PlayButton from "./PlayButton";
import { useSelector } from "react-redux";
import MemeRender from "./MemeRender";
import { useState } from "react";
import ErrorMsg from "./ErrorMsg";

function Meme() {
  const dispatch = useDispatch();
  const meme = useSelector((state) => state.meme.memeImg);
  const error = useSelector((state) => state.meme.error);
  const emptyInputError = useSelector((state) => state.meme.errorMessage);
  const [memeText, setMemeText] = useState("");

  const memeGenerateHandler = () => {
    if (memeText === "") {
      dispatch(memeSliceActions.toggleErrorMessageVisibility());
      return;
    }
    dispatch(getMeme());
  };

  return (
    <div className="modal_container_form">
      {emptyInputError && <ErrorMsg text='Please enter text'/>}
      <FontAwesomeIcon
        className="modal_container_form_icon"
        icon={faX}
        onClick={() => {
          dispatch(memeSliceActions.toggleModalVisability());
          dispatch(memeSliceActions.deleteMemeImg());
        }}
      />

      {meme ? (
        <MemeRender memeText={memeText}></MemeRender>
      ) : (
        <>
          <h3>Random meme generator</h3>
          <div className="meme_container">
            <input
              onChange={(e) => setMemeText(e.target.value)}
              value={memeText}
              placeholder="Your meme text"
            ></input>
            <PlayButton text="Get meme" action={memeGenerateHandler} />
          </div>
          {error && <ErrorMsg text={error}/>}
        </>
      )}
    </div>
  );
}

export default Meme;
