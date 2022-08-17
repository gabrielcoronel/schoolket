import { FileChooser, IconedLabel } from "../general-components";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const PictureChooser = (props) => {
  return (
    <FileChooser
      className="Button"
      label={<IconedLabel icon={faImage} text="Seleccionar imágenes" />}
      accept="image/*"
      multiple={true}
      {...props}
    />
  );
};

export default PictureChooser;