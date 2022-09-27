const CarouselDisplayer = ({ url }) => {
  return (
    <div className="flex flex-row justify-center items-center w-60 h-60 my-4">
      <img
        className="object-contain w-60 h-60"
        src={url}
        alt=''
      />
    </div>
  );
};

export default CarouselDisplayer;