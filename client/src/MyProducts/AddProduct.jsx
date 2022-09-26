import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <Link to="/createproduct"
      className="hover:bg-blue-800 hover:text-white hover:border-0 h-36 col-start-1 col-end-2 flex justify-center items-center rounded-xl text-2xl border-dashed border-2 border-blue-800 text-blue-800"
    >
      <FontAwesomeIcon icon={faPlus} />
    </Link>
  );
};

const Text = () => {
  return (
    <span
      className="flex justify-center items-center col-start-2 col-end-4 text-2xl text-center text-blue-800"
    >
      Publicar artículo
    </span>
  );
};

const AddProduct = () => {
  return (
    <div className="bg-white grid grid-cols-3 gap-2 p-4 w-1/3 border border-slate-300 rounded-xl shadow-2xl">
      <Button />

      <Text />
    </div>
  );
};

export default AddProduct;