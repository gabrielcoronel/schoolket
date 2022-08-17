import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconedLabel = ({ icon, text }) => {
  return (
    <span>
      <FontAwesomeIcon icon={icon} />
      &nbsp;{text}
    </span>
  );
};

export default IconedLabel;