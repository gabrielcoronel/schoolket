import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";

const Main = ({ isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />

      <Outlet />
    </div>
  );
};

export default Main;