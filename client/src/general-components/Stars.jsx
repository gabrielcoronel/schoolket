import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const getIntegerPart = Math.floor;

const getDecimalPart = (number) => {
  const integerPart = getIntegerPart(number);

  return number - integerPart;
};

const Stars = ({ number }) => {
  const integerPart = getIntegerPart(number);
  const decimalPart = getDecimalPart(number);

  const fullStars = new Array(integerPart).fill(null).map((_, index) => {
    return <FontAwesomeIcon key={index} icon={faStar} />
  });

  return (
    <span>
      {fullStars}
      {
        decimalPart >= 0.5 ?
          <FontAwesomeIcon icon={faStarHalfStroke} /> :
          null
      }
    </span>
  );
};

export default Stars;