const CarouselDisplayer = ({ url }) => {
  return (
    <div className="w-1/3">
      <img
        className="object-contain"
        src={url}
        alt=''
      />
    </div>
  );
};

export default CarouselDisplayer;