import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import LogIn from "../LogIn/LogIn.jsx";

const Main = ({ isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />

      {
        isLoggedIn ?
          <Outlet /> :
          <LogIn />
      }
    </div>
  );
};

export default Main;