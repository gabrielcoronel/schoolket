import { Link } from 'react-router-dom';
import { IconedLabel } from '../general-components';

const MenuLink = ({ link, icon, text }) => {
  return (
    <Link
      to={link}
      className="hover:font-bold hover:underline"
    >
      <IconedLabel icon={icon} text={text} />
    </Link>
  );
};

export default MenuLink;