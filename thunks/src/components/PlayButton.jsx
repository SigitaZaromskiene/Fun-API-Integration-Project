import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function PlayButton({ text, to, action }) {
  return (
    <button className="button" onClick={action}>
      {text} <FontAwesomeIcon className="button_icon" icon={faCirclePlay} />
    </button>
  );
}

export default PlayButton;
