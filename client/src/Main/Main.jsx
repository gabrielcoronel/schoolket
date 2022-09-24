import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import LogIn from "../LogIn/LogIn.jsx";
import "./Main.css";

const Main = ({ isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />

      <div>
        {
          isLoggedIn ?
            <Outlet /> :
            <LogIn />
        }
      </div>
    </div>
  );
};

export default Main;