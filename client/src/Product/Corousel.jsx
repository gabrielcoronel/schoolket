import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({ urls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    const nextIndex = (currentIndex === (urls.length - 1)) ?
      0 :
      currentIndex + 1;

    setCurrentIndex(nextIndex);
  };

  const previous = () => {
    const previousIndex = (currentIndex === 0) ?
      urls.length - 1 :
      currentIndex - 1;

    setCurrentIndex(previousIndex);
  };

  return (
    <div className="w-full h-2/5 flex flex-row justify-center items-center">
      <button
        className="Carousel-button"
        onClick={previous}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <img
        className="w-10/12 h-full"
        src={urls[currentIndex]}
        alt=''
      />

      <button
        className="Carousel-button"
        onClick={next}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;