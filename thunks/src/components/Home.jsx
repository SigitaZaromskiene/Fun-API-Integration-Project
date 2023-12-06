import { UISliceActions } from "../store/uiSlice";
import PlayButton from "./PlayButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GameCart from "./GameCart";
import Activity from "./Activity";
import FactsAboutCats from "./FactsAboutCats";

function Home() {
  const dispatch = useDispatch();
  const gameModal = useSelector((state) => state.modal.modal);

  return (
    <>
      {gameModal && (
        <GameCart>
          <Activity />
        </GameCart>
      )}
      {/* {gameModal && (
        <GameCart>
          <FactsAboutCats />
        </GameCart>
      )} */}
      <div className="home_container">
        <div className="home_container_game">
          <h3>What should I do today?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(UISliceActions.toggleCartVisability())}
          />
        </div>
        <div className="home_container_game">
          <h3>Curious about cats?</h3>
          <PlayButton
            text="Play"
            action={() => dispatch(UISliceActions.toggleCartVisability())}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
