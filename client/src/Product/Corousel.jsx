import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CarouselButton from './CarouselButton.jsx';
import CarouselDisplayer from './CarouselDisplayer.jsx';

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
    <div className="flex flex-row justify-evenly items-center">
      <CarouselButton onClick={previous} icon={faChevronLeft} />

      <CarouselDisplayer url={urls[currentIndex]} />

      <CarouselButton onClick={next} icon={faChevronRight} />
    </div>
  );
};

export default Carousel;