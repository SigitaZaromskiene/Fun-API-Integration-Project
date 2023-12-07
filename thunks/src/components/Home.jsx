import PlayButton from "./PlayButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GameCart from "./GameCart";
import Activity from "./Activity";
import FactsAboutCats from "./FactsAboutCats";
import { activitySliceActions } from "../store/activitySlice";
import { factsAboutCatsSliceActions } from "../store/factsAboutCats";
import { dogImagesActions } from "../store/dogsImages";
import DogsImage from "./DogsImage";
import { memeSliceActions } from "../store/memeSlice";
import Meme from "./Meme";

function Home() {
  const dispatch = useDispatch();
  const activityGameModal = useSelector((state) => state.activity.modal);
  const catGameModal = useSelector((state) => state.cats.modal);
  const dogImgModal = useSelector((state) => state.dogs.modal);
  const memeModal = useSelector((state) => state.meme.modal);

  return (
    <>
      {activityGameModal && (
        <GameCart>
          <Activity />
        </GameCart>
      )}
      {catGameModal && (
        <GameCart>
          <FactsAboutCats />
        </GameCart>
      )}
       {dogImgModal  && (
        <GameCart>
          <DogsImage />
        </GameCart>
      )}
       {memeModal  && (
        <GameCart>
          <Meme/>
        </GameCart>
      )}
      <div className="home_container">
        <div className="home_container_game">
          <h3>What should I do today?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(activitySliceActions.toggleModalVisability())}
          />
        </div>
        <div className="home_container_game">
          <h3>Curious about cats?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(factsAboutCatsSliceActions.toggleModalVisability())}
          />
        </div>
        <div className="home_container_game">
          <h3>Wanna see dogs pictures?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(dogImagesActions.toggleModalVisability())}
          />
        </div>
        <div className="home_container_game">
          <h3>Random meme generator</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(memeSliceActions.toggleModalVisability())}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
