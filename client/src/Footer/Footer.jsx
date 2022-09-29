import './Footer.css';
import logo from './logo.jpeg';

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly items-center w-full bg-blue-800 text-white mt-8 p-2">
      <div className="flex flex-row justify-center items-center p-4">
        <span className="text-3xl text-center">
          Schoolket
        </span>
      </div>

      <div className="flex flex-row justify-center items-center p-4">
        <img className="rounded-full h-24 w-24 border border-blue-800"
          src={logo}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-evenly items-start text-md p-4">
        <span>Departamento de TICs&nbsp;&copy;</span>
        <span>Expotec 2022</span>
      </div>
    </div>
  );
};

export default Footer;