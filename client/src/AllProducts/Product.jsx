import { getProductFirstPictureURL } from "../util/server-util.js";

const Product = ({ data }) => {
  const { product_id, title, description, price } = data;
  const pictureURL = getProductFirstPictureURL(product_id);

  return (
    <div className="flex flex-col">
      <img src={pictureURL} alt='' />
      <span>{title}</span>
      <span>{description}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;