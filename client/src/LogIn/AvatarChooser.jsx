import { IconedLabel, FileChooser } from "../general-components";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const AvatarChooser = (props) => {
  const label = <IconedLabel
    icon={faArrowUpFromBracket}
    text="Seleccionar avatar"
  />;

  return (
    <FileChooser
      className="Button"
      label={label}
      accept="image/*"
      multiple={false}
      {...props}
    />
  );
};

export default AvatarChooser;