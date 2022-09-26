import { Link } from 'react-router-dom';
import MenuLink from './MenuLink.jsx';
import { faUser, faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <nav
      className="flex flex-row justify-evenly items-center gap-4"
    >
      <MenuLink link="products" icon={faCartShopping} text="Ver productos" />
      <MenuLink link="myproducts" icon={faBook} text="Mis productos" />
      <MenuLink link="me" icon={faUser} text="Mi Perfil" />
    </nav>
  );
};

export default Menu;