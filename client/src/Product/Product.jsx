import { useAsync } from '../hooks';
import { getProductWithStudent, getProductPictureURLs } from '../util/server-util.js';
import Carousel from './Corousel.jsx';
import ProductData from './ProductData.jsx';
import StudentData from './StudentData.jsx';
import './Product.css';

const Product = ({ product_id }) => {
  const data = useAsync(() => getProductWithStudent(product_id));

  if (data === null)
    return <div>Cargando</div>

  const pictureURLs = getProductPictureURLs(product_id, data.numberPictures);
  const product = {
    title: data.title,
    description: data.description,
    price: data.price
  };
  const student = data.student;

  return (
    <div className="w-4/5 h-60 m-auto">
      <Carousel urls={pictureURLs} />

      <ProductData product={product} />

      <StudentData student={student} />
    </div>
  );
};

export default Product;