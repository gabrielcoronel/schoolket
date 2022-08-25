import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselButton = ({ onClick, icon }) => {
  return (
    <button
      className="Carousel-button"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CarouselButton;