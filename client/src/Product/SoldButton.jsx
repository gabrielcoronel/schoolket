import { toggleIsSold } from "../util/server-util.js";
import { IconedLabel } from "../general-components";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const SoldButton = ({ product_id, isSold, updateIsSold }) => {
  const handleClick = () => {
    toggleIsSold(product_id);
    updateIsSold(!isSold);
  };

  return (
    <button
      onClick={handleClick}
    >
      {
        isSold ?
          <IconedLabel icon={faXmark} text="Desmarcar como vendido"/> :
          <IconedLabel icon={faCheck} text="Marcar como vendido"/>
      }
    </button>
  );
};

export default SoldButton;