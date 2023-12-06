
import PlayButton from "./PlayButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GameCart from "./GameCart";
import Activity from "./Activity";
import FactsAboutCats from "./FactsAboutCats";
import { activitySliceActions } from "../store/activitySlice";
import { factsAboutCatsSliceActions } from "../store/factsAboutCats";

function Home() {
  const dispatch = useDispatch();
  const activityGameModal = useSelector((state) => state.activity.modal);
  const catGameModal = useSelector((state) => state.cats.modal);

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
      <div className="home_container">
        <div className="home_container_game">
          <h3>What should I do today?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(activitySliceActions.toggleCartVisability())}
          />
        </div>
        <div className="home_container_game">
          <h3>Curious about cats?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(factsAboutCatsSliceActions.toggleCartVisability())}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
