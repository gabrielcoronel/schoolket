import './Footer.css';

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly items-center w-full bg-blue-800 text-white mt-8 p-2">
      <div className="flex flex-row justify-center items-center p-4">
        <span className="text-5xl text-center">
          Schoolket
        </span>
      </div>

      <div className="flex flex-col justify-evenly items-start text-md p-4">
        <span>Antonio Arrieta Nuñez</span>
        <span>José Gabriel Coronel Cascante</span>
        <span>Cristian Valerín Ruiz</span>
      </div>
    </div>
  );
};

export default Footer;