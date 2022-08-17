import { classNames } from "../util/react-util";

const ModeButton = ({ label, selected, update }) => {
  const classes = classNames([
    "ModeButton", (selected ? "ModeButton-selected" : null)
  ]);

  return (
    <button
      className={classes}
      onClick={update}
    >
      {label}
    </button>
  );
};

export default ModeButton;