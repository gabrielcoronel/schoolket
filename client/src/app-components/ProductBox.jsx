import { getProductFirstPictureURL } from "../util/server-util.js";
import { Link } from "react-router-dom";

const ProductBox = ({ product }) => {
  const { product_id, title, description, price } = product;
  const pictureURL = getProductFirstPictureURL(product_id);

  return (
    <div className="grid grid-rows-4 grid-cols-7 gap-2 p-4 border border-slate-300 shadow-xl">
      <div
        className="flex justify-center items-center row-start-1 row-end-5 col-start-1 col-end-3"
      >
        <img
          className="h-40 w-30 border border-blue-800"
          src={pictureURL}
          alt=''
        />
      </div>

      <Link
        to={`/product/${product_id}`}
        className="row-start-1 row-end-2 col-start-3 col-end-7 text-blue-800 font-bold truncate"
      >
        {title}
      </Link>

      <span
        className="row-start-1 row-end-2 col-start-7 col-end-8 text-green-500 truncate"
      >
        ₡{price}
      </span>

      <span
        className="row-start-2 row-end-5 col-start-3 col-end-8 p-2 italic bg-slate-100 break-words text-ellipsis"
      >
        {description}
      </span>
    </div>
  );
};

export default ProductBox;