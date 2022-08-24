import { getProductFirstPictureURL } from "../util/server-util.js";

const TITLE_MAX = 20;
const DESC_MAX = (TITLE_MAX + (Math.round(TITLE_MAX / 3))) * 5;

const truncateText = (text, length) => {
  const slice = text.slice(0, length - 4);
  const truncated = slice + "...";

  return truncated;
};

const Product = ({ data }) => {
  const { product_id, title, description, price } = data;
  // const pictureURL = getProductFirstPictureURL(product_id);

  const normalizedTitle =
    title.length > TITLE_MAX ?
      truncateText(title, TITLE_MAX) :
      title;
  const normailzedDescription =
    description.length > DESC_MAX ?
      truncateText(description, DESC_MAX) :
      description;

  // Trabajé Expotec en el cole
  const pictureURL = "https://media.istockphoto.com/vectors/thumb-up-emoticon-vector-id157030584?k=20&m=157030584&s=612x612&w=0&h=TsRUZrgOW19D1f3WMleDrgGL-xfI6g0ZYhJDp58lS0E=";
  const caca = "jdalñjf";

  return (
    <div className="flex flex-col border-2 border-blue-800 rounded-xl">
      <img
        className="rounded-t-xl"
        src={pictureURL}
        alt=''
      />

      <div className="grid grid-rows-2 grid-cols-7 p-2">
        <span className="row-start-1 row-end-2 col-start-1 col-end-7 font-bold">
          {normalizedTitle}
        </span>

        <span className="row-start-1 row-end-2 col-start-7 col-end-8 text-green-700">
          ₡{price}
        </span>

        <div className="flex flex-col row-start-2 row-end-3 col-start-1 col-end-8 italic inline-block w-2">
          {normailzedDescription}
          {caca}
        </div>
      </div>
    </div>
  );
};

export default Product;