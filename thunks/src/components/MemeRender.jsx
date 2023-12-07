import Loader from "./Loader";
import { useSelector } from "react-redux";
import PlayButton from "./PlayButton";
import { useDispatch } from "react-redux";
import { getMeme, memeSliceActions } from "../store/memeSlice";

function MemeRender({ memeText }) {
  const dispatch = useDispatch();

  const meme = useSelector((state) => state.meme.memeImg.data.memes);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const loader = useSelector((state) => state.meme.loading);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="meme_container_img">
          <img src={`${meme[getRandomNumber(1, 60)].url}`} alt="Meme"></img>
          <p>{memeText}</p>
          <PlayButton text="Try again" action={() => dispatch(getMeme())} />
        </div>
      )}
    </div>
  );
}

export default MemeRender;
