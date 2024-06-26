import { useState, useEffect, useContext } from 'react';
import UsernameContext from '../UsernameContext.js';
import { getProductWithStudent, getProductPictureURLs } from '../util/server-util.js';
import Carousel from './Corousel.jsx';
import ProductData from './ProductData.jsx';
import StudentData from './StudentData.jsx';
import SoldButton from './SoldButton.jsx';
import AlreadySold from './AlreadySold.jsx';
import Loading from '../app-components/Loading.jsx';
import './Product.css';

const Product = ({ product_id }) => {
  const { value } = useContext(UsernameContext);
  const [data, setData] = useState(null);
  const [isSold, setIsSold] = useState(null);

  useEffect(() => {
    (async () => {
      const fetched = await getProductWithStudent(product_id);
      setData(fetched);
      setIsSold(fetched.is_sold);
    })();
  }, [product_id]);

  if (data === null)
    return <Loading />;

  const pictureURLs = getProductPictureURLs(product_id, data.numberPictures);
  const product = {
    title: data.title,
    description: data.description,
    price: data.price
  };
  const student = data.student;

  return (
    <div className="bg-white flex flex-col justify-center items-center w-4/5 shadow-2xl mx-auto mt-6">
      {
        (student.username !== value) && (data.is_sold) ?
          <AlreadySold /> :
          null
      }

      {
        student.username === value ?
          <SoldButton
            product_id={product_id}
            isSold={isSold}
            updateIsSold={setIsSold}
          /> :
          null
      }

      <Carousel urls={pictureURLs} />

      <ProductData product={product} />

      <StudentData student={student} />
    </div>
  );
};

export default Product;