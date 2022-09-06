import { Link } from 'react-router-dom';
import MenuLink from './MenuLink.jsx';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <nav
      className="flex flex-row justify-evenly items-center gap-2"
    >
      <MenuLink link="products" icon={faCartShopping} text="Ver productos" />
      <MenuLink link="me" icon={faUser} text="Mi Perfil" />
    </nav>
  );
};

export default Menu;