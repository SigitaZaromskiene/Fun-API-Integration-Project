import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { UISliceActions } from "../store/uiSlice";

function GameCart({children}) {
    const dispatch = useDispatch()
  return (
    <div className="modal_container">
        <div className='modal_container_form'>
        <FontAwesomeIcon className='modal_container_form_icon' icon={faX} onClick={()=>dispatch(UISliceActions.toggleCartVisability())}/>
            
      {children}
      </div>
    </div>
  );
}

export default GameCart;
