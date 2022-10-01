import Figure from './Figure.jsx';
import Menu from './Menu.jsx';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-blue-800 text-white w-full p-2 pr-6">
      <Figure />

      {
        isLoggedIn ?
          <Menu /> :
          null
      }
    </div>
  );
};

export default Header;