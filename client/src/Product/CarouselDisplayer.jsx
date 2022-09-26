const CarouselDisplayer = ({ url }) => {
  return (
    <div className="flex flex-row justify-center items-center w-60 h-60">
      <img
        className="object-contain"
        src={url}
        alt=''
      />
    </div>
  );
};

export default CarouselDisplayer;