import { toggleIsSold } from "../util/server-util.js";
import { IconedLabel } from "../general-components";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const soldClasses = `
  bg-red-600
  text-white

  hover:bg-red-400
  hover:text-black
`;

const unsoldClasses = `
  bg-green-700
  text-white

  hover:bg-green-400
  hover:text-black
`;

const SoldButton = ({ product_id, isSold, updateIsSold }) => {
  const handleClick = () => {
    toggleIsSold(product_id);
    updateIsSold(!isSold);
  };

  return (
    <button
      onClick={handleClick}
      className={
        "w-full font-bold " +
        (
          isSold ?
            soldClasses :
            unsoldClasses
        )
      }
    >
      {
        isSold ?
          <IconedLabel icon={faXmark} text="Desmarcar como vendido" /> :
          <IconedLabel icon={faCheck} text="Marcar como vendido" />
      }
    </button>
  );
};

export default SoldButton;